import { AxiosError, AxiosResponse } from 'axios';
import { News } from '../models/News';
import { NewsSearchAPIResponse } from '../models/SearchAPIResponse';
import axiosClient from './axiosClient';
import { buildNews } from './helper';

const pageSize = +(process.env.REACT_APP_PAGE_SIZE || 10);

interface NewsResponse {
    news: News[];
    count: number;
}

const formatNews = (response: AxiosResponse<NewsSearchAPIResponse>): NewsResponse => {
    const data = response.data.value;
    const news = buildNews(data)
    return { news, count: response.data.totalCount };
}

export async function searchNews(searchTerm: string, page: number): Promise<NewsResponse> {
    try {
        const response = await axiosClient.get('/api/search/NewsSearchAPI', {
            params: {
                q: searchTerm,
                pageSize: pageSize,
                pageNumber: page,
                withThumbnails: true
            }
        });
        return formatNews(response);
    } catch (error) {
        console.error(error);
        return { news: [], count: 0 };
    }
}
