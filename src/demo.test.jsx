import { render, screen } from "@testing-library/react";
import GifItem from "./components/GifItem.jsx";
import { expect } from "vitest";

describe("Demo", () => {
  const title = "Titulo";
  const url = "someUrl";

  test("should match snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the image with URL and ALT given", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title in component", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
