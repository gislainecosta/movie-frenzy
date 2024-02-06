import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  gap: 2rem;
  overflow: hidden;

  svg {
    font-size: 2rem;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
`;
