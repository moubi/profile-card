import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ProfileCard
        data={{
          name: "Justin Case",
          posts: 45,
          bio:
            "Hello 👋, my name is Justin. I am UI developer working with React on variety of Jamstack projects. Part of my time is also dedicated to blogging and open source.",
          location: "Copenhagen, Denmark",
          technologies: [
            "Javascript",
            "React",
            "Redux",
            "Vue",
            "Webpack",
            "NodeJs",
            "Webpack",
          ],
          creationDate: "01.01.2021",
        }}
      />
    </div>
  );
}
