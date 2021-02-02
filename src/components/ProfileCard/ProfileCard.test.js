import React from "react";
import expect, { mount, simulate } from "../../test-utils/unexpected-react";
import sinon from "sinon";

import ProfileCard from "./ProfileCard";

let props;

describe("ProfileCard", () => {
  beforeEach(() => {
    props = {
      data: {
        name: "Justin Case",
        posts: 45,
        creationDate: "01.01.2021",
      },
    };
  });

  it("should render default", () => {
    expect(
      <ProfileCard {...props} />,
      "when mounted",
      "to exhaustively satisfy",
      <div className="ProfileCard">
        <div className="avatar">
          <h2>Justin Case</h2>
          <i className="photo" />
          <span>45{" posts"}</span>
          <i className="status offline" />
        </div>
        <div className="details bio">
          <h3>Bio</h3>
          <p>No bio provided yet</p>
          <div>
            <button>View Skills</button>
            <p className="joined">{"Joined: "}01.01.2021</p>
          </div>
        </div>
      </div>
    );
  });

  it("should display online icon", () => {
    props.data.isOnline = true;

    expect(
      <ProfileCard {...props} />,
      "when mounted",
      "queried for first",
      ".status",
      "to have class",
      "online"
    );
  });

  describe("with a bio view", () => {
    it("should display bio text", () => {
      props.data.bio = "This is a bio text";

      expect(
        <ProfileCard {...props} />,
        "when mounted",
        "queried for first",
        "p",
        "to have text",
        "This is a bio text"
      );
    });

    it("should go back from Technologies to Bio view", () => {
      props.data.technologies = ["JavaScript", "React", "NodeJs"];
      const component = mount(<ProfileCard {...props} />);

      simulate(component, [
        // Click on "View Skills"
        {
          type: "click",
          target: "button",
        },
        // Click on "View Bio"
        {
          type: "click",
          target: "button",
        },
      ]);

      expect(component, "to contain elements matching", ".bio");
    });

    it("should call onViewChange prop", () => {
      props.data.onViewChange = sinon.stub();
      const component = mount(<ProfileCard {...props} />);

      simulate(component, [
        // Click on "View Skills"
        {
          type: "click",
          target: "button",
        },
        // Click on "View Bio"
        {
          type: "click",
          target: "button",
        },
      ]);

      expect(
        props.data.onViewChange,
        "to have a call exhaustively satisfying",
        [true]
      );
    });
  });

  describe("with a technologies view", () => {
    it("should display the technologies view", () => {
      const component = mount(<ProfileCard {...props} />);

      simulate(component, {
        type: "click",
        target: "button",
      });

      expect(
        component,
        "queried for first",
        ".details",
        "to exhaustively satisfy",
        <div className="details technologies">
          <h3>Technologies</h3>
          <div>
            <button>View Bio</button>
          </div>
        </div>
      );
    });

    it("should display location", () => {
      props.data.location = "Copenhagen, Denmark";
      const component = mount(<ProfileCard {...props} />);

      simulate(component, {
        type: "click",
        target: "button",
      });

      expect(
        component,
        "queried for first",
        ".location",
        "to have text",
        "Location: Copenhagen, Denmark"
      );
    });

    it("should display list of technologies", () => {
      props.data.technologies = ["JavaScript", "React", "NodeJs"];
      const component = mount(<ProfileCard {...props} />);

      simulate(component, {
        type: "click",
        target: "button",
      });

      expect(
        component,
        "queried for first",
        ".technologies ul",
        "to exhaustively satisfy",
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>NodeJs</li>
        </ul>
      );
    });

    it("should call onViewChange prop", () => {
      props.data.onViewChange = sinon.stub();
      const component = mount(<ProfileCard {...props} />);

      simulate(component, {
        type: "click",
        target: "button",
      });

      expect(
        props.data.onViewChange,
        "to have a call exhaustively satisfying",
        [false]
      );
    });
  });
});
