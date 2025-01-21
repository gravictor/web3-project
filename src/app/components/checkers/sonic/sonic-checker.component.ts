import {ChangeDetectionStrategy, Component} from "@angular/core";
import {SonicService} from "../../../services/sonic.service";
import {forkJoin, of, take} from "rxjs";
import {Router} from "@angular/router";
import {SonicStats} from "../../../models/sonic.model";

@Component({
  selector: 'app-sonic-checker',
  templateUrl: 'sonic-checker.component.html',
  styleUrls: ['sonic-checker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSonicCheckerComponent {

  constructor(private sonicService: SonicService, private router: Router) {}

  async onSubmit(addresses: string[]): Promise<void> {
    const observables = addresses.slice(0, 50).map(address => {
      return address ? this.sonicService.checkAirdrop(address) : of(null);
    });

    forkJoin(observables).pipe(take(1)).subscribe({
      next: (responses) => {
        this.sonicService.setStats(responses as SonicStats[]);
        this.router.navigate(['/sonic/results']);
      },
    });
  }
}
