import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: center;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      background: #3b9eff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      margin: 5px 0 0;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  > button {
    background: #f64c74;
    border: 0;
    border-radius: 4px;
    width: 100%;
    height: 44px;
    margin: 10px 0 0;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c74')};
    }
  }
`;
