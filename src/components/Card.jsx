import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const robertUrl =
    "https://www.richdad.com/MediaLibrary/RichDad/Images/home/richdad-home-radio-square-01.jpg";
  const robertUrl1 =
    "https://miro.medium.com/v2/resize:fit:1358/0*76OmPaOr7EfnSjXy";
  return (
    <div className="card">
      <img
        className="card-image"
        src={props.cardUrl}
        alt={props.cardTitle + "  " + "Profile Picture"}
      />
      <h2 className="card-title">{props.cardTitle}</h2>
      <p className="card-text">{props.cardText}</p>
    </div>
  );
};

Card.propTypes = {
  cardUrl: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardUrl: "Upload an Image",
  cardTitle: "Authors Name",
  cardText: "Short Description About Author",
};

export default Card;
