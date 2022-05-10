import api from "./api";

class UserService {
  getPublicContent() {
                       //conteudo do app
                       return api.get("/content");
                     }
}

export default new UserService();
