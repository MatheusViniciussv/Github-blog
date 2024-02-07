import { useParams } from "react-router-dom"
import { Container, Content } from "./styles"
import { TitleContent } from "./components/TitleContent"
import { Header } from "../../components/header"
import { api } from "../../api"
import { useEffect, useState } from "react"
import { Body } from "./components/Body"

interface Post {
  html_url: string;
  updated_at: string;
  title: string;
  comments: number;
  body: string
  user: {
    html_url: string;
    login: string
  }
}

export function Post() {

  const { number } = useParams()

  const [post, setPost] = useState<Post>({} as Post)

  async function getIssue() {
    const { data } = await api.get(`/repos/MatheusViniciussv/Github-blog/issues/${Number(number)}`);

    setPost(data)
  }

  useEffect(() => {
    getIssue()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <TitleContent
          comments={post.comments}
          html_url={post.html_url}
          title={post.title}
          updated_at={post.updated_at}
          user={post.user}
        />

        <Body body={post.body} />
      </Content>

    </Container>
  )
}