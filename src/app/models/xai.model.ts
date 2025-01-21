export interface XaiModel {
   data: {
     claimAmount: string;
     isInAwardList: string;
   }
   message: string;
}

export type XaiStats = {
  [wallet: string]: XaiStatModel;
};

export interface XaiStatModel {
  amount: number;
}
