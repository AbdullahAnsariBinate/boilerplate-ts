import { create, ApiResponse } from 'apisauce';

interface ApiConfig {
  baseURL: string;
  timeout?: number;
}

interface ApiCallOptions {
  endpoint: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: Record<string, any>;
}

class ApiService {
  private api: ReturnType<typeof create>;

  constructor(config: ApiConfig) {
    this.api = create({
      baseURL: config.baseURL,
      timeout: config.timeout || 30000,
    });
  }

  private async autoDetectToken(): Promise<string | undefined> {
    // Implement logic to fetch or generate the authentication token dynamically
    // For example, retrieve it from a state management library or AsyncStorage in React Native
    return 'YOUR_ACCESS_TOKEN';
  }

  private async buildHeaders(customHeaders?: Record<string, string>): Promise<Record<string, string>> {
    const token = await this.autoDetectToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    // Merge custom headers if provided
    return { ...headers, ...customHeaders };
  }

  private async buildParams(customParams?: Record<string, any>): Promise<Record<string, any>> {
    // Implement logic to dynamically build query parameters if needed
    return { ...customParams };
  }

  private async buildData(customData?: Record<string, any>): Promise<Record<string, any>> {
    // Implement logic to dynamically build request body data if needed
    return { ...customData };
  }

  async callApi<T>({ endpoint, method = 'get', headers, params, data }: ApiCallOptions): Promise<T> {
    try {
      const finalHeaders = await this.buildHeaders(headers);
      const finalParams = await this.buildParams(params);
      const finalData = await this.buildData(data);

      const response: ApiResponse<T> = await this.api[method](endpoint, finalData, {
        headers: finalHeaders,
        params: finalParams,
      });

      if (response.ok) {
        return response.data as T;
      } else {
        const errorMessage = response.data?.message || 'Unknown Error';

        throw new Error(`API Error (${response.problem}): ${errorMessage}`);
      }
    } catch (error) {
      throw new Error(`Failed to make API call: ${error.message}`);
    }
  }
}

// Example usage
export const apiService = new ApiService({
  baseURL: 'https://api.example.com',
});

export const apiCallOptions: ApiCallOptions = {
  endpoint: '/example-endpoint',
  method: 'get', // or 'post', 'put', 'delete'
  headers: {
    'Custom-Header': 'Custom-Value',
  },
  params: {
    key1: 'value1',
    key2: 'value2',
  },
  data: {
    payload1: 'data1',
    payload2: 'data2',
  },
};

apiService
  .callApi<{ data: any }>(apiCallOptions)
  .then((responseData) => {
    console.log('API Response:', responseData);
  })
  .catch((error) => {
    console.error('API Error:', error.message);
  });
