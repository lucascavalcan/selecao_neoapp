import * as C from "./style";
import { useRef, useState, useEffect } from "react";
import { Comic } from "../../types/Comic";
import { Item } from "../../types/Comic";

type Props = {
    data: Comic
};

export const ListItem = ({data}: Props) => {
    return(
        <C.Container>
            <C.Area>
                <C.Image>
                    <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} width="200" height="303" alt=""/>
                </C.Image>
                <C.Info>
                    {data.title}<br/>
                </C.Info>
                <C.Price>
                    <p>R$ 50,99</p>
                </C.Price>
            </C.Area>
            
        </C.Container>
    )
}