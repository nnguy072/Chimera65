export interface ILiveMatchSummonerModel {
  champion: string;
  summoner: string;
}

export interface ILiveMatchModel {
  summoner: string;
  allies: ILiveMatchSummonerModel[];
  enemies: ILiveMatchSummonerModel[];
}