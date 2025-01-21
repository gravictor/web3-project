export interface SonicResponseModel {
  id: string;
  claimed: number;
  vested: number;
  total: number;
  category: {
    id: string;
    name: string;
  };
  timestamps: any[];
  createdAt: string;
  order: number | null;
  description: string;
  isOffChainClaim: boolean;
}
export type SonicStats = {
  [wallet: string]: SonicStatModel;
};

export interface SonicStatModel {
  vesting: number;
  bonus: number;
  instant: number;
}
