import ApiClient from '../../ApiClient/ApiClient';

class AuthService {
  async login(email, password) {
    const response = await ApiClient.post('/login', {
      email,
      password,
    });

    return response.data;
  }
}

export default new AuthService();