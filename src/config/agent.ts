import axios, { AxiosResponse } from "axios";

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

const token = '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'
axios.defaults.baseURL = 'https://api.github.com';
const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const user = 'luccalkm';

axios.interceptors.request.use((config) => {
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use(async (response) => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
});

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
}

const Repos = {
    list: async () => requests.get<any[]>(`/users/${user}/repos`),
    commits: async (repoName: string) => requests.get<any[]>(`/repos/${user}/${repoName}/commits`),
}

const agent = {
    Repos,
}

export default agent