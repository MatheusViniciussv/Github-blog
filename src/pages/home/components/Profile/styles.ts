import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  border-radius: 10px;

  margin-top: -2rem;

  img {
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['blue']};
    font-weight: bold;
    font-size: 0.75rem;
  }
`

export const Social = styled.div`
  display: flex;
  gap: 1.5rem;
  
  span {
    font-size: 1rem;
  }
`;