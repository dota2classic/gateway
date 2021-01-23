import {MatchmakingMode} from "../shared-types/matchmaking-mode";


export default (mode: MatchmakingMode) => {
  if (mode === MatchmakingMode.SOLOMID) {
    return "1x1 Мид";
  } else if (mode === MatchmakingMode.DIRETIDE) {
    return "Diretide";
  } else if (mode === MatchmakingMode.RANKED) {
    return "Рейтинг";
  } else if (mode === MatchmakingMode.UNRANKED) {
    return "Обычная";
  } else if (mode === MatchmakingMode.GREEVILING) {
    return "Гряволы";
  } else if (mode === MatchmakingMode.ABILITY_DRAFT) {
    return "Ability Draft";
  } else if (mode === MatchmakingMode.TOURNAMENT) {
    return "Турнир";
  } else if (mode === MatchmakingMode.BOTS) {
    return "Обычная (с ботами)";
  } else if (mode === MatchmakingMode.HIGHROOM) {
    return "High room";
  }else {
    return "Неизвестный режим";
  }
};
