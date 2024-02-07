import { Link } from 'react-router-dom'
import { Container, Title, Info, Links } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { FormatedDate } from '../../../../utils/dateFormated'

interface PostTitleProps {
  title: string
  updated_at: string;
  html_url: string;
  comments: number;
  user: {
    html_url: string;
    login: string
  }
}

export function TitleContent({ comments, html_url, updated_at, user, title }: PostTitleProps) {
  return (
    <Container>
      <Links>
        <Link to='/'>
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <Link to={html_url}>
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </Links>

      <Title>{title}</Title>

      <Info>
        <Link to={user?.html_url}>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {user?.login}
          </div>
        </Link>


        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          {FormatedDate(updated_at)}
        </div>


        <div>
          <FontAwesomeIcon icon={faComment} />
          {`${comments} comentários`}
        </div>
      </Info>
    </Container>
  )
}