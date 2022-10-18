import styled from "../../stitches.config";

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

  "@md": {
    padding: "30px 0"
  }
});
