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
    creationDate,
    onViewChange,
  },
}) {
  const [isBioVisible, setIsBioVisible] = useState(true);

  const handleBioVisibility = () => {
    setIsBioVisible(!isBioVisible);

    if (typeof onViewChange === "function") {
      onViewChange(!isBioVisible);
    }
  };

  return (
    <div className="ProfileCard">
      <div className="avatar">
        <h2>{name}</h2>
        <i className="photo" />
        <span>{posts} posts</span>
        <i
          className={`status ${isOnline ? "online" : "offline"}`}
          data-test-id="status"
        />
      </div>
      <div
        className={`details ${isBioVisible ? "bio" : "technologies"}`}
        data-test-id="details"
      >
        {isBioVisible ? (
          <>
            <h3>Bio</h3>
            <p data-test-id="bio-text">
              {bio !== "" ? bio : "No bio provided yet"}
            </p>
            <div>
              <button onClick={handleBioVisibility}>View Skills</button>
              <p className="joined">Joined: {creationDate}</p>
            </div>
          </>
        ) : (
          <>
            <h3>Technologies</h3>
            {technologies.length > 0 && (
              <ul data-test-id="technologies-list">
                {technologies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <div>
              <button onClick={handleBioVisibility}>View Bio</button>
              {!!location && (
                <p className="location" data-test-id="location">
                  Location: {location}
                </p>
              )}
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
    creationDate: PropTypes.string.isRequired,
    onViewChange: PropTypes.func,
  }).isRequired,
};
