import "./css/Summary.css";
import PropTypes from "prop-types";

const SummaryBody = ({ body }) => {
  return (
    <div className="body container">
      <p>{body}</p>
    </div>
  );
};
SummaryBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default SummaryBody;
