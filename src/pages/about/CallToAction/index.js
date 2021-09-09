import React from "react";
import { Link } from "react-router-dom";
import { Header, Paragraph } from "../../../components/typography";
import { Container, ImageDiv, TextDiv, ImageContent } from "./style";
import Button from "../../../components/button";

const LetsTalk = () => {
  return (
    <>
      <Container>
        <ImageDiv>
          <ImageContent></ImageContent>
        </ImageDiv>

        <TextDiv>
          <Header>
          We’re a Team.<br /> We’re a Family. <br /> We’re DevsPrime!
          </Header>
          <Paragraph>
            DevsPrime is an online education platform that delivers video
            courses, programs and resources for Individual, Advertising & Media
            Specialist, Online Marketing Professionals, Freelances and anyone
            looking to pursue a career in digital marketing, Web development,
            Software Engineering and Programming.
          </Paragraph>
          <Link to="/contact">
            <Button primary>Say Hello</Button>
          </Link>
        </TextDiv>
      </Container>
    </>
  );
};

export default LetsTalk;
