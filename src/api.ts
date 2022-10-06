import axios from "axios";
import md5 from "md5";

const axiosInstance = axios.create({
    baseURL: "http://gateway.marvel.com"
});

const publicKey = "a6d35d20e86b84c940d11095b37622d0";
const privateKey = "badcdf3cafe0e9f790744e49291d181e65d66251";

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export const api = {
    getAllComics: async () => {
        let response = await axiosInstance.get(`/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`);
        return response.data.data;
    }
}