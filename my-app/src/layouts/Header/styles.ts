import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 14rem;
`;

export const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;

export const Search = styled.section`
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid var(--light-blue);
  color: var(--blue);
  background-color: transparent;
  width: 32vw;
`;

export const Button = styled.button`
  background-color: var(--blue);
  border: none;
  border-radius: 50%;
  color: var(--black);
  padding: 0.3rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
