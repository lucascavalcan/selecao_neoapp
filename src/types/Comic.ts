export type Comic = {
    title: string,
    id: number,
    issueNumber: number,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    },
    creators: string,
    price: number,
    amount: number;
};

export type Item =  { 
    name: string,
    role: string
}