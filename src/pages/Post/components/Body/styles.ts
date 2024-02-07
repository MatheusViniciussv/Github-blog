import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding-inline: 2rem;

  a {
    color: ${(props) => props.theme['blue']};
  }
`;
