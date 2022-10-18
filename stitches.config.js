import { createStitches } from "@stitches/react";

const { styled } = createStitches({
  media: {
    xs: "(max-width: 480px)",
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(max-width: 1400px)",
  },
});

export default styled