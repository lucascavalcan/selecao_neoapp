import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    background-color:rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .5s;
    justify-content: center;
    align-items: center;
    overflow-y:auto;
    z-index: 10;
`;


export const ModalBody = styled.div`
    width: 850px;
    height: 500px;
    background-color:rgba(0, 0, 0, 0.9);
    border-radius:10px;
    box-shadow:0px 0px 15px #999;
    display:flex;
    margin:20px 0px;
    transition: all ease .5s;
`;

export const ModalLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ModalRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ComicBig = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    img {
        height:353px;
        width:233px;
        cursor: pointer;
    }
`;

export const ComicInfo = styled.div`
    padding-bottom:20px;
    margin-right: 20px;

    h1 {
        margin-top:50px;
        color: #fff;
    }
`;

export const ComicInfoDesc = styled.div`
    font-size:15px;
    line-height: 15px;
    color:#999;
    margin-top:10px;
`;

export const ComicInfoPriceArea = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const ComicInfoSector = styled.div`
    color:#CCC;
    text-transform: uppercase;
    font-size:14px;
    margin-top:20px;
    margin-bottom:10px;
`;

export const ComicInfoActualPrice = styled.div`
    font-size:28px;
    color: #fff;
`;

export const AddButton = styled.div`
    margin-top:10px;
    margin-right:30px;

    background: #48d05f;
    color: #fff;
    border: 0;
    border-radius: 12px;
    width: 290px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all ease .4s;

    display: flex;
    align-items: center;
  
    &:hover {
      opacity: 0.8;
    }

    div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        margin-right: 10px;

        svg {
            
            color: #fff;
            size: 16px;
        }

        span {
            flex: 1;
            tetx-align: center;
        }
    }
`;

export const CancelButton = styled.div`
    margin-top:20px;
    margin-right:30px;

    width: 180px;
    background: #f00;
    color: #fff;
    border: 0;
    border-radius: 12px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all ease .4s;

    display: flex;
    align-items: center;
  
    &:hover {
      opacity: 0.8;
    }

    div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        margin-right: 10px;

        svg {
            
            color: #fff;
            size: 16px;
        }

        span {
            flex: 1;
            tetx-align: center;
        }
    }
`;