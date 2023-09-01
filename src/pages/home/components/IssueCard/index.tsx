import { Container, Head, Title, Content } from "./styles";

export function IssueCard() {
  return (
    <Container>
      <Head>
        <Title>JavaScript data types and data structures</Title>
        <span>Há 1 dia</span>
      </Head>
      <Content>
        Programming languages all have built-in data structures, but these often differ
        from one language to another. This article attempts to list the built-in data structures
        available in JavaScript and what properties they have. These can be used to build other
        data structures. Wherever possible, comparisons with other languages are drawn.
      </Content>
    </Container>
  )
}