import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  background: ${(props) => props.theme["base-profile"]};

  border-radius: 8px;

  div {
    display: flex;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  a {
    color: ${(props) => props.theme["blue"]};
    font-size: 0.75rem;
    text-decoration: none;
    
    font-weight: 700;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme["base-title"]};
  margin-bottom: 0.5rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 2rem;

  color: ${(props) => props.theme['base-span']};

  div {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }
`;