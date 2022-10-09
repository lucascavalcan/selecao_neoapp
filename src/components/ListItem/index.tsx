import * as C from "./style";
import { useRef, useState, useEffect } from "react";
import { Comic } from "../../types/Comic";
import { Item } from "../../types/Comic";
import { Modal } from "../Modal";

import {UseAppSelector} from "../../redux/hooks/useAppSelector";
import {setItems} from "../../redux/reducers/cartReducer";
import {useDispatch} from "react-redux";

type Props = {
    data: Comic
};

export const ListItem = ({data}: Props) => {

    const dispacth = useDispatch();
    const card = UseAppSelector(state => state.cart);

    //modal:
    const [showModal, setShowModal] = useState(false);
    const showOrHide = () => setShowModal(true)

    function HandleCloseModal() {
        setShowModal(false);
    }


    return(
        <C.Container id="Products">
            {showModal ? <Modal Data={data} closeModal={HandleCloseModal}/> : null}
            <C.Area onClick={showOrHide}>
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