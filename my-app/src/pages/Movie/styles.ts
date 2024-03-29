import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0 2rem 0;
`;

export const Movie = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Poster = styled.img`
  width: 20%;
`;

export const Description = styled.p`
  text-align: justify;
  margin-top: 2rem;
`;

export const Details = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.section`
  display: flex;
  margin: 1rem 0 0.4rem 0;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;

export const Player = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-blue);
  width: 25%;
  padding: 1rem;

  > p {
    font-weight: bold;
    text-align: center;
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > p {
    font-weight: bold;
    text-align: center;
  }
`;
