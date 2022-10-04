import { News } from '../pages/home/news.interface';
import axiosClient from './axiosClient';
import data from './fakeData.json';

interface UnformatImage {
    url: string;
    thumbnail: string;
    webpageUrl: string;
}

interface UnformatNew {
    id: string;
    title: string;
    url: string;
    description: string;
    body: string;
    snippet: string;
    keywords: string;
    language: string;
    isSafe: boolean;
    datePublished: string;
    provider: Object;
    image: UnformatImage;
}

interface NewsSearchAPIResponse {
    value: UnformatNew[];
    totalCount: number;
}

const fakeCall: () => Promise<NewsSearchAPIResponse> = async () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(data as NewsSearchAPIResponse)
        }, 3000);
    })
}

const formatDescription = (desc: string) => {
    const limitOfWords = 20;
    const ellipsis = "...";
    return desc.split(" ").slice(0, limitOfWords).join(" ").concat(ellipsis);
}

const formatNews = (response: NewsSearchAPIResponse): { news: News[], count: number } => {
    const data = response.value;

    const news = data.map(dat => ({
        title: dat.title,
        description: formatDescription(dat.body),
        url: dat.url,
        image: dat.image.url
    }));
    return { news, count: response.totalCount };
}


export const searchNews: () => Promise<{ news: News[], count: number }> = async () => {
    try {
        // const response = await axiosClient.get('/search');
        const response = await fakeCall();
        return formatNews(response);
    } catch (error) {
        console.error(error);
        throw new Error();
        // TODO: dispatch an action to show a formatted error with this information (not found/forbbiden/internal error)
    }
}
