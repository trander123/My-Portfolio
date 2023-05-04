import React from "react";
import { ContentWrapper } from "../wrappers/ContentWrapper";

export const About = () => {
  const pageDescription = "Here's everything about me.";

  return (
    <ContentWrapper heading={"About Me"} description={pageDescription}>
      <div className=" mb-10">
        <iframe className="w-96 h-96" src="./files/cv.pdf" title="pdf"></iframe>
      </div>
    </ContentWrapper>
  );
};
