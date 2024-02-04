import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 18rem;
  justify-content: space-between;
`;

export const Poster = styled.img`
  width: 100%;
`;

export const Title = styled.p`
  font-weight: bold;
  text-align: center;
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
