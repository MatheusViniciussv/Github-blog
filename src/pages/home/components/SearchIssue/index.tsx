import { Container } from "./styles";

export function SearchIssue(props: { setInputData: React.Dispatch<string> }) {
  return (
    <Container>
      <div>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>

      <input placeholder="Buscar conteúdo" onChange={(e) => props.setInputData(e.target.value)} />
    </Container>
  )
}