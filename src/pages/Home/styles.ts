import styled from "styled-components";

interface PropsModal {
  isSelected: boolean;
}

export const HomeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Navbar = styled.nav``;

export const Genre = styled.article<PropsModal>`
  display: flex;
  border-radius: 1rem;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  gap: 5%;
  color: ${(props) => (props.isSelected ? "#21252b" : "#b4bbd5")};
  background-color: ${(props) => (props.isSelected ? "#b4bbd5" : "#21252b")};
  font-weight: bold;
`;

export const NavTitle = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const ListGenres = styled.section`
  height: 100%;
  overflow-y: scroll;
  padding-right: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;
