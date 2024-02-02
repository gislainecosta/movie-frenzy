import styled from "styled-components";

interface PropsModal {
  isSelected: boolean;
}

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
