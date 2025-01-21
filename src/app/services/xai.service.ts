import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {generateRandomUserAgent} from "../utils/generate-user-agent";
import {map} from "rxjs/operators";
import {XaiModel, XaiStats} from "../models/xai.model";

@Injectable({
  providedIn: "root"
})
export class XaiService {
  private stats: XaiStats[] = [];

  constructor(private http: HttpClient) {}

  checkAllocation(wallet: string) {
    let config = {
      timeout: 25000,
      headers: {
        "User-Agent": generateRandomUserAgent(),
      },
    };
    return this.http.get<XaiModel>(`https://api.xai.space/master/airdrop/is_in_award_list?user_address=${wallet}`, config).pipe(
      map((response: XaiModel) => {
        const stats: XaiStats = {};
        stats[wallet] = {amount: 0};
        if (response) {
          stats[wallet].amount = response.data.claimAmount ? response.data.claimAmount as unknown as number / 1000000 : 0;
        }
        return stats;
      })
    );
  }
  setStats(stats: XaiStats[]): void {
    this.stats = stats;
  }

  getStats(): XaiStats[] {
    return this.stats;
  }
}
