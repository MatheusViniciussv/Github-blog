import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 54rem;
`;

export const IssuesContent = styled.div`
  width: 54rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;