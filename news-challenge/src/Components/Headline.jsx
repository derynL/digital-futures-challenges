import "./css/headline.css";
import PropTypes from "prop-types";

const Headline = ({ image, alt, headline, id, story }) => {
  return (
    <div className="headline-body container">
      <img src={image} alt={headline} className="img-fluid" />
      <p className="headline">{headline}</p>
    </div>
  );
};

Headline.proptype = {
  thumbnail: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default Headline;
