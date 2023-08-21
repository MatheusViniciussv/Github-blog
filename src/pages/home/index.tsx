import { Header } from "../../components/header"
import { Profile } from "./components/Profile"
import { SearchIssue } from "./components/SearchIssue"
import { Container, Content } from "./styles"

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Profile />

        <SearchIssue />
      </Content>
    </Container>
  )
}