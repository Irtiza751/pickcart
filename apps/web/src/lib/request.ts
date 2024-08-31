const BASE_URL = "https://fakestoreapi.com";

export function request(endpoint: string, options?: RequestInit) {
  return fetch(BASE_URL + endpoint, options);
}
