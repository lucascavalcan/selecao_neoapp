import * as C from "./style";
import { useState, useEffect } from "react";
import { api } from "../../api";
import { Theme } from "../../components/Theme";

export const Home = () => {
    
    useEffect (() => {
        loadComics()
    },[]);

    async function loadComics() {
        let json = await api.getAllComics()
        console.log(json)
    }

    return (
        <Theme>
            <C.Container>
                ...
            </C.Container>
        </Theme>
    )
}