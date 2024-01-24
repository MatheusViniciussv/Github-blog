import { Link } from 'react-router-dom'
import { Container, Title, Info, Links } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'

export function TitleContent() {
  return (
    <Container>
      <Links>
        <Link to='#'>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <Link to='#'>
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </Links>

      <Title>JavaScript data types and data structures</Title>

      <Info>
        <a>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </div>
        </a>

        <a>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </div>
        </a>

        <a>
          <div>
            <FontAwesomeIcon icon={faComment} />
            2 comments
          </div>
        </a>
      </Info>
    </Container>
  )
}