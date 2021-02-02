import React from "react";
import expect from "../../test-utils/unexpected-react";

import ProfileCard from "./ProfileCard";

let props;

describe("ProfileCard", () => {
  beforeEach(() => {
    props = {
      data: {
        name: "Justin Case",
        posts: 45,
        bio:
          "Hello 👋, my name is Justin. I am UI developer working with React on variety of Jamstack projects. Part of my time is also dedicated on bloging and open source.",
        location: "Copenhagen, Denmark",
        technologies: [
          "Javascript",
          "React",
          "Redux",
          "Vue",
          "Webpack",
          "NodeJs",
          "Webpack"
        ],
        creationDate: "01.01.2021"
      }
    };
  });

  it("should render default", () => {
    expect(
      <ProfileCard {...props} />,
      "when mounted",
      "to have class",
      "ProfileCard"
    );
  });
});
