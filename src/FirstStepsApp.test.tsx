import { render, screen } from "@testing-library/react";
import { describe,  expect,  test } from "vitest";
import { FirstStepsApp } from "./main";

describe('FirstStepsApp', () => {
  test('should match snapshot', () => {
    //? Arrange
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
    screen.debug();
    //? Act
    //? Assert
  });
});