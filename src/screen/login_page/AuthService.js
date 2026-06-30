import ApiClient from '../../ApiClient/ApiClient';
import apiConstant from '../../ApiClient/ApiConstant';

class AuthService {
  async login(email, password) {
    const response = await ApiClient.post(apiConstant.LOGIN, {
      email,
      password,
    });

    return response.data;
  }
}

export default new AuthService();