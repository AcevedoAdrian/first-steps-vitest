import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    //? Arrange
    const {container} = render(<MyAwesomeApp />);
    console.log(container);
    
    //? Act
    //? Assert
  });
});