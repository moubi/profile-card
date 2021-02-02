import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ProfileCard.scss";

// Credits: https://codepen.io/alvaromontoro/pen/ebPEWb

export default function ProfileCard({
  data: {
    name,
    posts,
    isOnline = false,
    bio = "",
    location = "",
    technologies = [],
    creationDate
  }
}) {
  const [isBioVisible, setIsBioVisible] = useState(true);

  const handleBioVisibility = () => {
    setIsBioVisible(!isBioVisible);
  };

  return (
    <div className="ProfileCard">
      <div className="avatar">
        <h2>{name}</h2>
        <i className="photo" />
        <span>{posts} posts</span>
        <i className={`status ${isOnline ? "online" : "offline"}`} />
      </div>
      <div className="details">
        {isBioVisible ? (
          <>
            <h3>Bio</h3>
            <p>{bio !== "" ? bio : "No bio provided yet"}</p>
            <div>
              <button onClick={handleBioVisibility}>View skills</button>
              {!!creationDate && <p>Joined: {creationDate}</p>}
            </div>
          </>
        ) : (
          <>
            <h3>Technologies</h3>
            {technologies.length > 0 && (
              <ul>
                {technologies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <div>
              <button onClick={handleBioVisibility}>View Bio</button>
              {!!location && <p>Location: {location}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posts: PropTypes.number.isRequired,
    isOnline: PropTypes.bool,
    bio: PropTypes.string,
    location: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    creationDate: PropTypes.string.isRequired
  }).isRequired
};
