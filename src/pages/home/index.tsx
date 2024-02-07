import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import { IssueCard } from "./components/IssueCard"
import { Profile } from "./components/Profile"
import { SearchIssue } from "./components/SearchIssue"
import { Container, Content, IssuesContent } from "./styles"
import { api } from "../../api"

// interface DataProps {
//   title: string
//   content: string
//   howLong: string
//   id: number
// }

const data = [
  {
    id: 1,
    body: "Programming languages all have built-in data structures, but these often differ from one language to another.This article attempts to list the built-in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn",
    title: 'JavaScript data types and data structures',
    updated_at: 'Há 1 dia'
  },
  {
    id: 2,
    body: "Programming languages all have built-in data structures, but these often differ from one language to another.This article attempts to list the built-in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn",
    title: 'JavaScript data types and data structures',
    updated_at: 'Há 1 dia'
  },
  {
    id: 3,
    body: "Programming languages all have built-in data structures, but these often differ from one language to another.This article attempts to list the built-in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn",
    title: 'JavaScript data types and data structures',
    updated_at: 'Há 2 dia'
  },
  {
    id: 4,
    body: "Programming languages all have built-in data structures, but these often differ from one language to another.This article attempts to list the built-in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn",
    title: 'JavaScript data types and data structures',
    updated_at: 'Há 1 dia'
  }
]


interface ProfileProps {
  avatar_url: string;
  login: string;
  name: string;
  followers: string;
  html_url: string;
  company: string;
  bio: string
}

interface IssuesProps {
  id: number
  body: string;
  updated_at: string;
  title: string
}

export function Home() {

  const [datas, setData] = useState<ProfileProps>({} as ProfileProps)
  const [issues, setIssues] = useState<IssuesProps[]>([])

  const [input, setInput] = useState('')

  async function fetchUserData() {
    const response = await api.get<ProfileProps>('users/MatheusViniciussv')

    setData(response.data)

  }

  async function fetchIssue() {
    const response = await api.get(`search/issues?q=${input ?? ''}%20repo:MatheusViniciussv/Github-blog`)

    setIssues([...response.data.items])
  }

  useEffect(() => {
    fetchIssue()
    fetchUserData()
  }, [input])


  return (
    <Container>
      <Header />

      <Content>
        <Profile profile={datas} />

        <SearchIssue setInputData={setInput} />

      </Content>

      <IssuesContent>
        {issues.map((card) => {
          return (
            <IssueCard key={card.id} body={card.body} title={card.title} updated_at={card.updated_at} id={card.id} />
          )
        })}
      </IssuesContent>
    </Container>
  )
}