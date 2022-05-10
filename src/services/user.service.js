import api from "./api";

class UserService {
  getPublicContent() {
    return api.get("/test/all");
  }
}

export default new UserService();
