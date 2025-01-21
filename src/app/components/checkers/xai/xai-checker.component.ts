import {ChangeDetectionStrategy, Component} from "@angular/core";
import {SonicService} from "../../../services/sonic.service";
import {Router} from "@angular/router";
import {XaiService} from "../../../services/xai.service";
import {forkJoin, of, take} from "rxjs";
import {XaiModel, XaiStats} from "../../../models/xai.model";

@Component({
  templateUrl: 'xai-checker.component.html',
  selector: 'app-xai-checker',
  styleUrls: ['xai-checker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XaiCheckerComponent {
  constructor(private xaiService: XaiService, private router: Router) {}

  async onSubmit(addresses: string[]): Promise<void> {
    const observables = addresses.slice(0, 50).map(address => {
      return address ? this.xaiService.checkAllocation(address) : of(null);
    });

    forkJoin(observables).pipe(take(1)).subscribe({
      next: (responses: any) => {
        responses = responses?.length ? responses : [] as unknown as XaiStats;
        this.xaiService.setStats(responses);
        this.router.navigate(['/xai/results']);
      },
    });
  }
}
