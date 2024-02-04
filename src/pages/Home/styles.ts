import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
`;

export const MoviesList = styled.div`
  padding: 0 2rem;
  width: 86%;
`;

export const Navbar = styled.nav`
  width: 14%;
  padding-right: 1rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--light-blue);
`;

export const PageTitle = styled.p`
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: 1.4rem;

  span {
    margin-left: 1rem;
  }
`;
