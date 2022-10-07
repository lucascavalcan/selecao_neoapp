import * as C from "./style";
import { useRef, useState, useEffect } from "react";
import { Comic } from "../../types/Comic";

type Props = {
    data: Comic
};

export const ListItem = ({data}: Props) => {
    return(
        <C.Container>
            <C.Title>{data.title}</C.Title>
        </C.Container>
    )
}