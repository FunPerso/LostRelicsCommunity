import api from "../http-common";
import ISummaryData from "../types/summary.type";

class SummaryDataService {
  get() {
    return api.get<ISummaryData>("/stats/summary")
  }
};

export default new SummaryDataService();