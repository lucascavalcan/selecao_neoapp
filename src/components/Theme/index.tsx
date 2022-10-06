import * as C from "./style";
import {Header} from "../Header";
import {Footer} from "../Footer";

type Props = {
    children: React.ReactNode;
}

export const Theme = ({children}: Props) => {
    return(
        <C.Container>
            <Header/>

            <C.Page>
                {children}
            </C.Page>

            <Footer/>
        </C.Container>
    )
}