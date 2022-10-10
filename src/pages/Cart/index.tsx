import * as C from "./style";
import { Theme } from "../../components/Theme";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { useNavigate } from "react-router-dom";
import { UseAppSelector } from "../../redux/hooks/useAppSelector";

import { Comic } from "../../types/Comic"; 

interface Product {
    id: number,
    title: string,
    price: number,
    thumnbail: string,
    amount: number
}

export const Cart = () => {

    const card = UseAppSelector(state => state.cart);

    const navigate = useNavigate();

    function handleBackButton() {
        navigate(-1);
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
                                    <button>
                                        <DeleteIcon width={20}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </C.ProductTable>

                <footer>
                    <button>Finalizar pedido</button>
                    <C.Total>
                        <span>TOTAL</span>
                        <strong>R$ --, --</strong>
                    </C.Total>
                </footer>
            </C.Container>
        </Theme>
    )
}