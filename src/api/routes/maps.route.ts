import api from "../http-common";
import IMapData from "../types/maps.type";

class MapDataService {
  getAll() {
    return api.get<Array<IMapData>>("/LR/maps")
  }
};

export default new MapDataService();