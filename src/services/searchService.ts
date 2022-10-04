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

interface FakeResponse {
    value: UnformatNew[]
}

const fakeCall: () => Promise<FakeResponse> = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data as FakeResponse)
        }, 300);
    })
}

const formatDescription = (desc: string) => {
    const limitOfWords = 20;
    const ellipsis = "...";
    return desc.split(" ").slice(0, limitOfWords).join(" ").concat(ellipsis);
}

const formatNews = (response: FakeResponse): News[] => {
    const data = response.value;

    return data.map(dat => ({
        title: dat.title,
        description: formatDescription(dat.body),
        url: dat.url,
        image: dat.image.url
    }));
}

export const searchNews = async () => {
    try {
        // const response = await axiosClient.get('/search');
        const response = await fakeCall();
        return formatNews(response);
    } catch (error) {
        console.error(error);
        // TODO: dispatch an action to show a formatted error with this information (not found/forbbiden/internal error)
    }
}
