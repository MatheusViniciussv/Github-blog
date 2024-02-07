import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import { IssueCard } from "./components/IssueCard"
import { Profile } from "./components/Profile"
import { SearchIssue } from "./components/SearchIssue"
import { Container, Content, IssuesContent } from "./styles"
import { api } from "../../api"


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
  number: number
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

  async function fetchIssues() {
    const response = await api.get(`search/issues?q=${input ?? ''}%20repo:MatheusViniciussv/Github-blog`);

    setIssues([...response.data.items]);
  }

  useEffect(() => {
    fetchUserData()
    fetchIssues()
  }, [])

  useEffect(() => {
    const interval = setTimeout(() => {
      fetchIssues();
    }, 500);

    return () => clearTimeout(interval);
  }, [input]);

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
            <IssueCard key={card.id} body={card.body} title={card.title} updated_at={card.updated_at} number={card.number} />
          )
        })}
      </IssuesContent>
    </Container>
  )
}