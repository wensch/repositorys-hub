import styled from "styled-components";
import Link from 'react-router-dom';

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
`

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin-top: 20px;
  }

  h1 {
    font-size: 30px;
    margin-top: 10px;
    color:rgb(68, 48, 134);
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`

export const BackButtuon = styled(Link)`
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
`