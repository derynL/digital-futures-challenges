import { Link, useParams } from "react-router-dom";
import Headline from "./Headline";
import SummaryBody from "./SummaryBody";

const Summary = ({ stories }) => {
  let { id } = useParams();

  let story = stories.find((news) => {
    let storyID = news.id.replaceAll("/", "_");
    return id === storyID;
  });

  let headline, image, storyURL, summary;
  //  {
  if (story) {
    headline = story.fields.headline;
    image = story.fields.thumbnail;
    storyURL = story.webUrl;
    summary = story.fields.bodyText;
  }
  return (
    <>
      {!stories.length > 0 && <p>Stories not available</p>}
      {!story && <p>Story not available</p>}
      {stories.length > 0 && story && (
        <div key={stories.id}>
          <div>
            <Headline image={image} alt={headline} headline={headline} />
            <SummaryBody body={summary} />
            {/* <div> */}
            <Link to="/">Back to headlines</Link>
            <a
              href={storyURL}
              className="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Read full story (opens a new tab on host site)
            </a>
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
  // }
  // return "";
  // });
  // return <main>{story}</main>;
};

export default Summary;
