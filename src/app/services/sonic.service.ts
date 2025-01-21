import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { SonicResponseModel, SonicStats } from "../models/sonic.model";
import { generateRandomUserAgent } from "../utils/generate-user-agent";

@Injectable({
  providedIn: "root"
})
export class SonicService {
  private stats: SonicStats[] = [];

  constructor(private http: HttpClient) {}

  checkAirdrop(wallet: string): Observable<SonicStats> {

    let config = {
      timeout: 25000,
      headers: {
        "User-Agent": generateRandomUserAgent(),
      },
    };

    return this.http.get<SonicResponseModel[]>(`https://airdrop.sonic.game/api/allocations?wallet=${wallet}`, config).pipe(
      map((response: SonicResponseModel[] | any) => {
        const stats: SonicStats = {};
        stats[wallet] = { vesting: 0, bonus: 0, instant: 0 };
        if (response?.length && response[0]) {
          stats[wallet].vesting = response[0].total > 0 ? response[0].total : 0;
          stats[wallet].bonus = response[1].total > 0 ? response[1].total : 0;
          stats[wallet].instant = response[2].total > 0 ? response[2].total : 0;
        }
        return stats;
      })
    );
  }
  setStats(stats: SonicStats[]): void {
    this.stats = stats;
  }

  getStats(): SonicStats[] {
    return this.stats;
  }
}
