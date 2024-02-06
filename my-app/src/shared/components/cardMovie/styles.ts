import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 18rem;
  justify-content: space-between;
`;

export const Poster = styled.img`
  height: 11rem;
  max-width: 100%;
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Definimos quantas linhas queremos */
  display: -webkit-box;
  overflow: hidden;
  width: 100%; /* Definimos o tamanho máximo do nosso container*/
`;

export const Button = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  background-color: var(--blue);
  color: var(--black);
  border-radius: 1rem;
  font-weight: bold;
  width: 90%;
  font-size: 0.9rem;
`;
