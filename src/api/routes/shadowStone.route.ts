import api from "../http-common";
import IShadowStoneData from "../types/shadowStone.type";

class ShadowStoneDataService {
  get() {
    return api.get<IShadowStoneData>("/stats/shadowstones")
  }
};

export default new ShadowStoneDataService();