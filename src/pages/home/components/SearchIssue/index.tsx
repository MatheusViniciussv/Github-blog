import { Container } from "./styles";

export function SearchIssue() {
  return (
    <Container>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>

      <input placeholder="Buscar conteúdo" />
    </Container>
  )
}