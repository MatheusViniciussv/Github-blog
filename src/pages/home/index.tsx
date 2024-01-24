import { Header } from "../../components/header"
import { IssueCard } from "./components/IssueCard"
import { Profile } from "./components/Profile"
import { SearchIssue } from "./components/SearchIssue"
import { Container, Content, IssuesContent } from "./styles"

// interface DataProps {
//   title: string
//   content: string
//   howLong: string
//   id: number
// }

const data = [
  {
    id: 1,
    content: "Programming languages all have built-in data structures, but these often differ from one language to another.This article attempts to list the built-in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn",
    title: 'JavaScript data types and data structures',
    howLong: 'Há 1 dia'
  },
  {
    id: 2,
    content: "Programming languages all have built-in data structures, but these often differ from one language to another.This article attempts to list the built-in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn",
    title: 'JavaScript data types and data structures',
    howLong: 'Há 1 dia'
  },
  {
    id: 3,
    content: "Programming languages all have built-in data structures, but these often differ from one language to another.This article attempts to list the built-in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn",
    title: 'JavaScript data types and data structures',
    howLong: 'Há 2 dia'
  },
  {
    id: 4,
    content: "Programming languages all have built-in data structures, but these often differ from one language to another.This article attempts to list the built-in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn",
    title: 'JavaScript data types and data structures',
    howLong: 'Há 1 dia'
  }
]


export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Profile />

        <SearchIssue />

      </Content>

      <IssuesContent>
        {data.map((card) => {
          return (
            <IssueCard content={card.content} title={card.title} howLong={card.howLong} id={card.id} />
          )
        })}
      </IssuesContent>
    </Container>
  )
}