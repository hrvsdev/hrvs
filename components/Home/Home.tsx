import { styled } from "@stitches/react";

import Hero from "./hero";

export default function Home() {
  return (
    <Main>
      <Hero />
    </Main>
  );
}

const Main = styled("main", {
  padding: "50px 0",
});
