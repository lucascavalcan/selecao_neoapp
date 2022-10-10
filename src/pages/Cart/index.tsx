import * as C from "./style";
import { Theme } from "../../components/Theme";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { UseAppSelector } from "../../redux/hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {setItems, addItems, removeItems} from "../../redux/reducers/cartReducer";

import { Comic } from "../../types/Comic"; 

interface Product {
    id: number,
    title: string,
    price: number,
    thumnbail: string,
    amount: number
}

export const Cart = () => {

    const dispacth = useDispatch();
    const card = UseAppSelector(state => state.cart);


    function handleIncrement() {

    }

    function handleDecrement() {

    }

    function handleRemoveProduct(Item: Comic) {
        const prod = { ...Item, count: 1 };
        dispacth( removeItems(Item) )
    }


    function handleFinishButton() {
        alert("Compra finalizada!")
    }

    return (
        <Theme>
            <C.Container>
                <C.ProductTable>
                    <thead>
                        <tr>
                            <th/>
                            <th>PRODUTO</th>
                            <th>QTD</th>
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
                                    <div>
                                        <button>
                                            <RemoveCircleOutlineIcon/>
                                        </button>
                                        <input
                                            type="text"
                                            readOnly
                                        />
                                        <button>
                                            <AddCircleOutlineIcon/>
                                        </button>
                                    </div>
                                </td>

                                <td>
                                    <strong>VALOR TOTAL</strong>
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
                        <strong>R$ --, --</strong>
                    </C.Total>
                </footer>
            </C.Container>
        </Theme>
    )
}