import { styled } from "@stitches/react";

import HeroComp from "./hero";

export default function Home() {
  return (
    <Main>
      <HeroComp />
    </Main>
  );
}

const Main = styled("main", {
  padding: "50px 0",
});
