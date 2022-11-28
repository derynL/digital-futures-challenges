import { render } from "@testing-library/react";
import App from "./App";

test("App component renders content", () => {
  const appComponent = render(<App />);
  expect(appComponent).toBeTruthy();
});
