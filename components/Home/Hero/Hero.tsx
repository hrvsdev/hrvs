import { styled } from "@stitches/react";

export default function HeroComp(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <HelloText>Hello</HelloText>
        <NameText>I am Harsh Vyas</NameText>
      </Wrapper>
    </Container>
  );
}

const HelloText = styled("h1", {
  fontSize: 40,
});

const NameText = styled("h1", {
  fontSize: 80,
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
