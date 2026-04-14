import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import App from "./App.jsx";

test("renders the title", async () => {
  const screen = await render(<App />);

  await expect.element(screen.getByText("Starter")).toBeVisible();
});
