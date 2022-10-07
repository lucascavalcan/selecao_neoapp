import * as C from "./style";
import { useRef, useState, useEffect } from "react";
import { Comic } from "../../types/Comic";
import { Item } from "../../types/Comic";

import {UseAppSelector} from "../../redux/hooks/useAppSelector";
import {setItems} from "../../redux/reducers/cartReducer";
import {useDispatch} from "react-redux";

type Props = {
    data: Comic
};

export const ListItem = ({data}: Props) => {

    const dispacth = useDispatch();
    const card = UseAppSelector(state => state.cart);

    function handleAddProdut() {
        dispacth( setItems(data) );
    }

    return(
        <C.Container>
            <C.Area>
                <C.Image>
                    <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} width="200" height="303" alt=""/>
                </C.Image>
                <C.Info>
                    <C.Title>
                        {data.title}
                    </C.Title>
                    <C.Price>
                        <p>R$ 50,99</p>
                     </C.Price>
                </C.Info>

            </C.Area>
            
        </C.Container>
    )
}