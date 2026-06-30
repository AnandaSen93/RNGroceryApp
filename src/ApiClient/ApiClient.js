import axios from 'axios';
import apiConstant from './ApiConstant'



class ApiClient {


  constructor() {
    this.client = axios.create({
      baseURL: apiConstant.IS_PRODUCTION
        ? apiConstant.LIVE_BASE_URL
        : apiConstant.DEV_BASE_URL,
      timeout: 30000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    this.initializeInterceptors();
  }


  initializeInterceptors() {
    this.client.interceptors.request.use(
      async config => {
        const token = global.authToken;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        console.log(
          `${config.method?.toUpperCase()} ${config.url}`,
          config.data || config.params,
        );

        return config;
      },
      error => Promise.reject(error),
    );

    this.client.interceptors.response.use(
      response => response,
      error => {
        console.log('API Error', error.response?.data);

        return Promise.reject(error);
      },
    );
  }

  async get(url, params = {}, model = null) {
    const response = await this.client.get(url, {
      params,
    });

    return model
      ? new model(response.data)
      : response.data;
  }

  async post(url, body = {}, model = null) {
    const response = await this.client.post(
      url,
      body,
    );

    return model
      ? new model(response.data)
      : response.data;
  }

  async put(url, body = {}, model = null) {
    const response = await this.client.put(
      url,
      body,
    );

    return model
      ? new model(response.data)
      : response.data;
  }

  async patch(url, body = {}, model = null) {
    const response = await this.client.patch(
      url,
      body,
    );

    return model
      ? new model(response.data)
      : response.data;
  }

  async delete(url, params = {}, model = null) {
    const response = await this.client.delete(
      url,
      {
        params,
      },
    );

    return model
      ? new model(response.data)
      : response.data;
  }

  async multipart(
    url,
    formData,
    model = null,
  ) {
    const response = await this.client.post(
      url,
      formData,
      {
        headers: {
          'Content-Type':
            'multipart/form-data',
        },
      },
    );

    return model
      ? new model(response.data)
      : response.data;
  }
}

export default new ApiClient();