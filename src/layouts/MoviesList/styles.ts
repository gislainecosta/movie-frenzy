import styled from "styled-components";

export const PageTitle = styled.p`
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: 1.4rem;

  span {
    margin-left: 1rem;
  }
`;

export const Movies = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3rem;
  width: 100%;
`;
