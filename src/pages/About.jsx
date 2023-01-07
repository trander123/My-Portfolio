import React from "react";
import { ContentWrapper } from "../wrappers/ContentWrapper";

export const About = () => {
  const pageDescription = "Here's everything about me.";

  return (
    <ContentWrapper
      heading={"About Me"}
      description={pageDescription}
    ></ContentWrapper>
  );
};
