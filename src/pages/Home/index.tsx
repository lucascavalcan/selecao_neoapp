import * as C from "./style";
import { useState, useEffect } from "react";
import { api } from "../../api";
import { Theme } from "../../components/Theme";
import { ListItem } from "../../components/ListItem";
import Image from "../../images/banner5.jpg"

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
        setComics(json)
    }

    return (
        <Theme>
            <C.Container>
                <C.Banner>
                    <C.Text>NOVOS LANÇAMENTOS EM <strong>10 DE NOV</strong></C.Text>
                    <C.Button><a href="#Products" className="menuItem">VER COMICS DISPONÍVEIS</a></C.Button>
                </C.Banner>
                {loading &&
                    <div>Carregando...</div>
                }
                <>

                    {!loading && comics.length > 0 &&
                        <div className="listItem">
                            {comics.map((item, index) => (
                                <ListItem data={item} key={index}/>
                            ))}
                        </div>
                    }
                </>

            </C.Container>
        </Theme>
    )
}