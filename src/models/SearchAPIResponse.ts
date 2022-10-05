interface UnformatImage {
    url: string;
    thumbnail: string;
    webpageUrl: string;
}

export interface UnformatNew {
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

export interface NewsSearchAPIResponse {
    value: UnformatNew[];
    totalCount: number;
}
