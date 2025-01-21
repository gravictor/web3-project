import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {SonicStatModel, SonicStats} from "../../../../models/sonic.model";
import {SonicService} from "../../../../services/sonic.service";

@Component({
  selector: 'app-sonic-results',
  templateUrl: 'sonic-results.component.html',
  styleUrls: ['sonic-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSonicResultsComponent implements OnInit {
  statsList: { address: string, stats: SonicStatModel }[] = [];
  displayedColumns: string[] = ['address', 'vesting', 'bonus', 'instant'];

  constructor(private sonicService: SonicService) {}

  ngOnInit(): void {
    const statsData: SonicStats[] = this.sonicService.getStats();
    this.statsList = statsData.map(item => {
      const address = Object.keys(item)[0];
      const stats = item[address];
      return { address, stats };
    });
  }
}
