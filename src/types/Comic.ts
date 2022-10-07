export type Comic = {
    title: string,
    id: number,
    issueNumber: number,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    },
    creators: {
        available: number,
        collectionURI: string,
        items: Item[] 
        
    },
    prices: string
};

export type Item =  { 
    name: string,
    role: string
}