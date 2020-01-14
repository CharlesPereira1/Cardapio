import styled from 'styled-components';

export const Categoria = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

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
    padding: 20px;
  }

  img {
    flex: 1;
    align-items: center;
    display: block;
    max-width: 180px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
  }

  &: hover;
`;
