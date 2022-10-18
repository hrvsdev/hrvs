import { createStitches } from "@stitches/react";

const { styled } = createStitches({
  media: {
    xs: "(min-width: 480px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1400px)",
  },
});

export default styled