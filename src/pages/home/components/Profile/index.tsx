import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Content, Social, TitleContent } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProfileProps {
  profile: {
    avatar_url: string;
    login: string;
    name: string;
    followers: string;
    html_url: string;
    company: string;
    bio: string
  }
}


export function Profile({ profile }: ProfileProps) {
  return (
    <Container>
      <img src={profile.avatar_url} alt="profile" />
      <Content>
        <TitleContent>
          <h3>{profile.name}</h3>

          <Link to={profile.html_url}>
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </TitleContent>

        <span>{profile.bio}</span>

        <Social>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profile.login}
          </span>
          {profile.company ? (
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profile.company}
            </span>
          ) : (
            <div>

            </div>
          )}
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {`${profile.followers} seguidores`}
          </span>
        </Social>
      </Content>
    </Container>
  )
}