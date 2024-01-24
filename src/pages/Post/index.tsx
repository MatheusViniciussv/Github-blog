import { useParams } from "react-router-dom"
import { Container, Content } from "./styles"
import { TitleContent } from "./components/TitleContent"
import { Header } from "../../components/header"

export function Post() {

  // const params = useParams()

  return (
    <Container>
      <Header />

      <Content>
        <TitleContent />
      </Content>

    </Container>
  )
}