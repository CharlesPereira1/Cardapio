import styled from 'styled-components';

export const Categoria = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  list-style: none;

  div {
    display: flex;
    justify-content: space-between;
  }

  strong {
    display: flex;
    align-items: center;
    font-size: 24px;
    line-height: 20px;
    color: #333;
    padding-right: 20px;
  }

  li {
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    max-height: 300px;
    padding: 10px;
  }

  img {
    max-width: 50%;
    height: auto;
    border-radius: 4px;
  }
`;
