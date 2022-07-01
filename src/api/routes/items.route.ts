import api from "../http-common";
import IItemData from "../types/items.type";

class ItemDataService {
  getAll() {
    return api.get<Array<IItemData>>("/LR/items")
  }
};

export default new ItemDataService();