import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;

export const Tracks = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  padding: 1rem 0;

  a {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  padding-bottom: 1rem;
  border-bottom: 1px solid;
  font-size: 1.2rem;
  text-align: center;
  color: #bfe8f1;
`;
