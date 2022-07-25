import { HeaderContainer } from '../details/DetailsStyles'
import {AboutContainer, InfoContainer, StyledImage} from './AboutStyles'
import codingSvg from '../../assets/coding.svg'

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} style={{ width: "300px" }} />
      <HeaderContainer>
        <h1>
          About Software Developer <br /><span>Recinilt Hiuv</span>{" "}
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Recinilt</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4> I've already known JS, ReactJS, SQL, Python, Linux</h4>
        <h2>
          <a href="mailto:kocakrcep68@gmail.com">Send email</a> :
          kocakrecep68@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
}

export default About