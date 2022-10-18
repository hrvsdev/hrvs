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
          <b>attractive and better apps</b> for both web and mobile. Apart from coding, I
          like to play chess.
        </AboutText>
        <ButtonGroup>
          <Button>
            <a href="https://github.com/hrvsdev" target="_blank" rel="noreferrer">
              Github
            </a>
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
}

const HelloText = styled("p", {
  paddingLeft: 4,
  fontSize: 20,
  color: "rgb(60, 65, 68)",
  marginBottom: 5,

  "@md": {
    fontSize: 18,
  },
});

const NameText = styled("h1", {
  fontSize: 80,
  marginBottom: 5,

  "@md": {
    fontSize: 60,
  },

  "@sm": {
    fontSize: 45,
  },
});

const TagText = styled("p", {
  fontSize: 60,
  marginBottom: 20,

  "@md": {
    fontSize: 40,
  },

  "@sm": {
    fontSize: 30,
  },
});

const AboutText = styled("p", {
  paddingLeft: 4,
  marginBottom: 50,
  maxWidth: 600,
  fontSize: 17,
  color: "rgb(60, 65, 68)",
  lineHeight: "31px",

  "@sm": {
    fontSize: 16,
  },
});

const ButtonGroup = styled("div", {
  display: "flex",
  columnGap: 20,
});

const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  width: "fit-content",
  fontWeight: 500,
  borderRadius: 22,
  border: "2px solid black",
  transition: "transform 100ms",

  "&:active": {
    transform: "translateY(2px)",
  },

  variants: {
    type: {
      primary: {
        color: "white",
        background: "black",
        "&:hover": {
          color: "black",
          background: "white",
        },
      },
      secondary: {
        color: "black",
        background: "white",
        "&:hover": {
          color: "white",
          background: "black",
        },
      },
    },
  },

  defaultVariants: {
    type: "primary",
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

  "@md": {
    padding: "60px 20px",
  },

  "@sm": {
    padding: "20px",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: 1000,
  width: "100%",
});
