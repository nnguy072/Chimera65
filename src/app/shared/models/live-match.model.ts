export interface ILiveMatchSummonerModel {
  champion: string;
  summoner: string;
  profile_icon: string;
  spell_1: {
    asset: string,
    name: string
  };
  spell_2: {
    asset: string,
    name: string
  };
}

export interface ILiveMatchModel {
  summoner: string;
  champion_assets_url: string;
  profile_icon_assets_url: string;
  summoner_spell_assets_url: string;
  allies: ILiveMatchSummonerModel[];
  enemies: ILiveMatchSummonerModel[];
}