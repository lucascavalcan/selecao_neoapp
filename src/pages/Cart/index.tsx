import * as C from "./style";
import { Theme } from "../../components/Theme";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { UseAppSelector } from "../../redux/hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {removeItems} from "../../redux/reducers/cartReducer";

import { Comic } from "../../types/Comic"; 

export const Cart = () => {

    const dispatch = useDispatch();
    const card = UseAppSelector(state => state.cart);

    function calculateTotal(n: number):string {
        const total = (n * 50.99).toFixed(2);
        return total
    }

    function handleRemoveProduct(Item: Comic) {
        dispatch( removeItems(Item) )
    }

    function handleFinishButton() {
        alert(`Compra finalizada no valor de R$ ${calculateTotal(card.items.length)}!`)
    }

    return (
        <Theme>
            <C.Container>
                <C.ProductTable>
                    <thead>
                        <tr>
                            <th/>
                            <th>PRODUTO</th>

                            <th>SUBTOTAL</th>
                            <th />
                        </tr>
                    </thead>

                    <tbody>
                        {/* vai dar um map nos produtos que forem adds ao carrinho*/}
                        {card.items.map((item: Comic, index) => (

                            <tr key={index}>
                                <td>
                                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                                </td>

                                <td>
                                    <strong>{item.title}</strong>
                                    <span>R$ 50,99</span>
                                </td>

                                <td>
                                    <strong>R$ 50,99</strong>
                                </td>

                                <td>
                                    <button onClick={() => handleRemoveProduct(item)}>
                                        <DeleteIcon width={20}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </C.ProductTable>

                <footer>
                    <button onClick={handleFinishButton}>Finalizar pedido</button>
                    <C.Total>
                        <span>TOTAL</span>
                        <strong>R$ {calculateTotal(card.items.length)}</strong>
                    </C.Total>
                </footer>
            </C.Container>
        </Theme>
    )
}