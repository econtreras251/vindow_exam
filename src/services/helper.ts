import { UnformatNew } from "../models/SearchAPIResponse";

export const formatDescription = (desc: string) => {
    const limitOfWords = 20;
    const ellipsis = "...";
    return desc.split(" ").slice(0, limitOfWords).join(" ").concat(ellipsis);
}

export const buildNews = (data: UnformatNew[]) => {
    return data.map(newsItem => ({
        title: newsItem.title,
        description: formatDescription(newsItem.body),
        url: newsItem.url,
        thumbnail: newsItem.image.thumbnail,
        image: newsItem.image.url
    }));
}