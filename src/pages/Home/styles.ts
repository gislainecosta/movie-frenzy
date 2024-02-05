import styled from "styled-components";

interface Props {
  isSelected: boolean;
}

export const HomeContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  width: 100%;
`;

export const Navbar = styled.nav`
  width: 14%;
  padding-right: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--light-blue);
`;

export const Genre = styled.article<Props>`
  display: flex;
  border-radius: 1rem;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  gap: 5%;
  color: var(--light-blue);
  background-color: ${(props) =>
    props.isSelected ? "#b4bbd514" : "transparent"};
  font-weight: bold;
`;
