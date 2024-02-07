import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 1.125rem;
    }

    span {
      font-size: 0.875;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;

    border: 1px solid ${(props) => props.theme["base-border"]};
    color: ${(props) => props.theme["base-text"]};
    background: ${(props) => props.theme["base-input"]};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["blue"]};
    }
  }
`;