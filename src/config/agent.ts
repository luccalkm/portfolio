import axios, { AxiosResponse } from "axios";

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

const token = process.env.REACT_APP_GITHUB_TOKEN;
axios.defaults.baseURL = 'https://api.github.com/';
const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const user = 'luccalkm';

axios.interceptors.request.use((config) => {
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
}

const Repos = {
    list: () => requests.get<any[]>(`/user/${user}/repos`),
    commits: (repoName: string) => requests.get<any[]>(`/repos/${user}/${repoName}/commits`),
}

const agent = {
    Repos,
}

export default agent