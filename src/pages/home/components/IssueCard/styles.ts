import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  overflow: hidden;

  height: 16.25rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme["base-post"]};

  border: 2px solid ${(props) => props.theme["base-post"]};

  cursor: pointer;
  transition: border 250ms;

  a {
    text-decoration: none;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["base-border"]};
  }
`;

export const Head = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
    flex-shrink: 0;
  }
`;

export const Title = styled.strong`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  margin-right: 1rem;
  line-height: 2rem;

  color: ${(props) => props.theme["base-title"]};
`;

export const Content = styled.div`
  font-size: 1rem;
  line-height: 1.6rem;

  width: 22rem;

  overflow: hidden;
  white-space: pre-wrap;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  hyphens: auto;

  font-size: 1rem;
  line-height: 1.6rem;

  text-decoration: none;
  color: ${(props) => props.theme["base-text"]};
`;