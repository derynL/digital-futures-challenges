// import { useState, useEffect } from "react";
// import mockNewsData from "../mockNewsData.json";
import Headline from "./Headline";
import "./css/headline.css";
import { Link } from "react-router-dom";

const AllHeadlines = ({ headlines }) => {
  const newsStories = headlines.map((currentStory) => {
    let headline = currentStory.fields.headline;
    let image = currentStory.fields.thumbnail;
    let alt = currentStory.fields.headline;
    let storyID = currentStory.id.replaceAll("/", "_");
    return (
      <Link to={`/${storyID}`} className="container" key={currentStory.id}>
        <Headline image={image} alt={alt} headline={headline} />
      </Link>
    );
  });
  return <main>{newsStories}</main>;
};

// const AllHeadlines = ({ headlines }) => {
//   return (
//     <>
//       {headlines.map((currentStory) => (
//         <Headline
//           key={currentStory.id}
//           image={currentStory.fields.thumbnail}
//           headline={currentStory.fields.headline}
//           story={currentStory.fields.bodyText}
//         />
//       ))}
//     </>
//   );
// };

export default AllHeadlines;
