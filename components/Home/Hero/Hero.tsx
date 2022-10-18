import styled from "../../../stitches.config";

export default function HeroComp(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <HelloText>Hi there, I&apos;m</HelloText>
        <NameText>Harsh Vyas.</NameText>
        <TagText>I code for the Web & Mobile.</TagText>
        <AboutText>
          I am a software developer mainly focused on the <b>front-end</b> to create&nbsp;
          <b>attractive and better apps</b> for both web and mobile. I like to play chess
          apart from coding.
        </AboutText>
        <PrimaryButton>
          <a href="https://github.com/hrvsdev" target="_blank" rel="noreferrer">
            Github
          </a>
        </PrimaryButton>
      </Wrapper>
    </Container>
  );
}

const HelloText = styled("p", {
  paddingLeft: 4,
  fontSize: 20,
  color: "rgb(60, 65, 68)",

})

const NameText = styled("h1", {
  fontSize: 80,
  marginBottom: 5,
});

const TagText = styled("p", {
  fontSize: 60,
  marginBottom: 20,
});

const AboutText = styled("p", {
  paddingLeft: 4,
  marginBottom: 50,
  maxWidth: 600,
  fontSize: 17,
  color: "rgb(60, 65, 68)",
  lineHeight: "31px",
});

const PrimaryButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  width: "fit-content",
  fontWeight: 500,
  color: "white",
  background: "black",
  border: "2px solid black",
  borderRadius: 22,
  transition: "transform 100ms",

  "&:hover": {
    color: "black",
    background: "white",
    borderColor: "black",
  },

  "&:active": {
    transform: "translateY(2px)",
  },

  a: {
    display: "inline-block",
    padding: "10px 30px",
    color: "CurrentColor",
  },
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "100px 20px",
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: 1000,
  width: "100%",
});
