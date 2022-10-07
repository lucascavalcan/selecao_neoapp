import * as C from "./style";
import { useState, useEffect } from "react";
import { api } from "../../api";
import { Theme } from "../../components/Theme";
import { ListItem } from "../../components/ListItem";

import { Comic } from "../../types/Comic";


export const Home = () => {
    
    const [comics, setComics] = useState<Comic[]>([])
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        loadComics()
    },[]);

    async function loadComics() {
        setLoading(true)
        let json = await api.getAllComics()
        setLoading(false)
        console.log(json)
        setComics(json)
        console.log(comics)
    }

    return (
        <Theme>
            <C.Container>
                {loading &&
                    <div>Carregando...</div>
                }

                {!loading && comics.length > 0 &&
                    <div className="listItem">
                        {comics.map((item, index) => (
                            <ListItem data={item} key={index}/>
                        ))}
                    </div>
                }
            </C.Container>
        </Theme>
    )
}