import styled from "styled-components";
import {Link} from 'react-router-dom';

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

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none; 

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid rgb(99, 99, 99);
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #222;
          transition: color 0.2s;

          &:hover {
            color: #666;
          }
        }

        span {
          background-color: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999; 
      }
    }
  }`

  export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 50px;

    button {
      padding: 10px;
      outline: 0;
      border: 0;
      background-color: rgb(68, 48, 134);
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      svg {
        margin-right: 5px;
      }
    }
  `

  export const IssueFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  `

  export const ButtonSetIssues = styled.button`
    padding: 10px 20px;
    outline: 0;
    border: 0;
    background-color: ${props => props.active ?  'rgb(68, 48, 134)' : 'rgb(180, 161, 243)'};
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `	