import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    margin: 10px 100px 10px 100px;
    border-radius: 5px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          background: #48d05f;
          color: #fff;
          border: 0;
          border-radius: 4px;
          padding: 12px 20px;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          transition: all ease .4s;
        
          &:hover {
            opacity: 0.8;
          }
        }
      }

      @media (max-width: 1120px) {
        margin: 10px 50px 10px 50px;
        margin-top: 100px;
      }

      @media (max-width: 900px) {
        width: 880px;
      }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
      }

      tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
      }

      img {
        height: 100px;
      }

      strong {
        color: #333;
        display: block;
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
      }

      div {
        display: flex;
        align-items: center;

        input {
          border: 1px solid #ddd;
          border-radius: 4px;
          color: #666;
          padding: 6px;
          width: 50px;
        }
      }

      button {
        background: none;
        border: 0;
        padding: 6px;
        cursor: pointer;

        svg {
          color: #999;
          transition: all ease .4s;
        }
      }
    `;

export const Total = styled.div`
      display: flex;
      align-items: baseline;

      span {
        color: 999;
        font-weight: bold;
      }

      strong {
        font-size: 28px;
        margin-left: 5px;
      }
`;