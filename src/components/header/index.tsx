import { Container } from "./styles";

import CoverImage from '../../assets/Cover.svg'

export function Header() {
  return (
    <Container>
      <img src={CoverImage} alt="" />
    </Container>
  )
}