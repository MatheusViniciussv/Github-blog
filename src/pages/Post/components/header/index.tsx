import { Link } from 'react-router-dom'
import { Container, Title, Info } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <Link to='#'>Voltar</Link>
        <Link to='#'>VER NO GITHUB</Link>
      </div>

      <Title>JavaScript data types and data structures</Title>

      <Info>
        <a>
          <div>
            gitlogo
            git name
          </div>
        </a>

        <a>
          <div>
            calendarLogo
            how long?
          </div>
        </a>

        <a>
          <div>
            comentsLogo
            how much coments
          </div>
        </a>
      </Info>
    </Container>
  )
}