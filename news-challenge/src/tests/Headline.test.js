import { render, screen } from "@testing-library/react";
import Headline from "../Components/Headline";
import mockNewsData from "../../mockNewsData.json";

describe("Headline tests", () => {
  const newsStub = mockNewsData.response.results[0].fields;

  it("should render a headline from the headline prop", () => {
    // ARRANGE
    const testHeadline = newsStub.headline;

    // ACT
    render(<Headline headline={testHeadline} />);
    const result = screen.getByText(testHeadline);

    // ASSERT
    expect(result).toBeInTheDocument();
  });
});
