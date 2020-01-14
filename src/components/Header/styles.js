import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.dark};
    }

    span {
      font-size: 12px;
      color: ${colors.strong};
    }
  }
`;
