import * as C from "./style";
import { useState} from "react";
import { Comic } from "../../types/Comic";
import { Modal } from "../Modal";


type Props = {
    data: Comic
};

export const ListItem = ({data}: Props) => {

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