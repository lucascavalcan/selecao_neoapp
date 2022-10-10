import * as C from "./style";
import { Comic } from "../../types/Comic";
import {UseAppSelector} from "../../redux/hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {setItems, addItems} from "../../redux/reducers/cartReducer";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

type Props = {
    closeModal: () => void,
    Data: Comic
}

export const Modal = ({closeModal, Data}: Props) => {
    
    const dispacth = useDispatch();
    const card = UseAppSelector(state => state.cart);

    //adicionar produtos no carrinho:    
    function handleAddProdut() {
        dispacth( addItems(Data) );
        closeModal();
        alert ("Item adicionado ao carrinho!")
        console.log(card.items)
    }
    
    return(
        <C.Container>
            <C.ModalBody>

                <C.ModalLeft>
                    <C.ComicBig>
                        <img src={`${Data.thumbnail.path}.${Data.thumbnail.extension}`} alt=""/>
                    </C.ComicBig>
                    <C.ComicInfoPriceArea>
                        <C.ComicInfoSector>Preço</C.ComicInfoSector>
                        <C.ComicInfoActualPrice>R$50,99</C.ComicInfoActualPrice>
                    </C.ComicInfoPriceArea>
                </C.ModalLeft>

                <C.ModalRight>
                    <C.ComicInfo>
                        <h1>{Data.title}</h1>
                        <C.ComicInfoDesc>
                            {Data.description}
                        </C.ComicInfoDesc>
                    </C.ComicInfo>

                    <C.AddButton onClick={handleAddProdut}>
                        <div>
                            <AddShoppingCartIcon/>
                        </div>
                        <span>Adicionar ao carrinho</span>
                    </C.AddButton>

                    <C.CancelButton onClick={closeModal}>
                        <div>
                            <HighlightOffIcon/>
                        </div>
                        <span>Cancelar</span>
                    </C.CancelButton>
                </C.ModalRight>

            </C.ModalBody>
        </C.Container>
    )
}