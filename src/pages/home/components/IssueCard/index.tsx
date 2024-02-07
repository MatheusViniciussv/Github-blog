import { NavLink } from "react-router-dom";
import { Container, Head, Title, Content } from "./styles";
import { FormatedDate } from "../../../../utils/dateFormated";

interface CardProps {
  title: string
  body: string
  updated_at: string
  number: number
}

export function IssueCard({ body, updated_at, title, number }: CardProps) {
  return (
    <Container>
      <NavLink to={`post/${number}`}>
        <Head>
          <Title>{title}</Title>
          <span>{FormatedDate(updated_at)}</span>
        </Head>
        <Content>
          {body}
        </Content>
      </NavLink>
    </Container>

  )
}