import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {XaiStats} from "../../../../models/xai.model";
import {XaiService} from "../../../../services/xai.service";

@Component({
  selector: 'app-xai-results',
  templateUrl: 'xai-results.component.html',
  styleUrls: ['xai-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XaiResultsComponent implements OnInit {
  statsList: { allocation: number; address: string }[] = [];
  displayedColumns: string[] = ['address', 'allocation'];
  constructor(private xaiService: XaiService) {}

  ngOnInit(): void {
    const statsData: XaiStats[] = this.xaiService.getStats();
    this.statsList = statsData.map(item => {
      const address = Object.keys(item)[0];
      const allocation = item[address].amount;
      return { address, allocation };
    });
  }
}
