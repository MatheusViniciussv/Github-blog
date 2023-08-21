import { Container, Content, Social, TitleContent } from "./styles";

import Avatar from '../../../../assets/avatar.svg'

export function Profile() {
  return (
    <Container>
      <img src={Avatar} alt="" />
      <Content>
        <TitleContent>
          <h3>Cameron Williamson</h3>

          <a href="#">GITHUB</a>
        </TitleContent>

        <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>

        <Social>
          <span>cameronwll</span>
          <span>rocketseat</span>
          <span>32 seguidores</span>
        </Social>
      </Content>
    </Container>
  )
}