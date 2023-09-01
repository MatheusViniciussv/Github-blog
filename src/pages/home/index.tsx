import { Header } from "../../components/header"
import { IssueCard } from "./components/IssueCard"
import { Profile } from "./components/Profile"
import { SearchIssue } from "./components/SearchIssue"
import { Container, Content, IssuesContent } from "./styles"

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Profile />

        <SearchIssue />

      </Content>

      <IssuesContent>

        <IssueCard />

        <IssueCard />

        <IssueCard />
      </IssuesContent>
    </Container>
  )
}