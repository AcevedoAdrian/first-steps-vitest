import { describe, expect, test } from "vitest";
import { render,screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    //? Arrange
    const {container} = render(<MyAwesomeApp />);
    console.log(container);
    console.log()
    
    //? Act
    //? Assert
  });

  test('should render firstName and lastName screen', () => {
    render(<MyAwesomeApp />);
    screen.debug();
    // const h1 = screen.getByRole('heading', { level: 1 });
    const h1 = screen.getByTestId('first-name-title');
    expect(h1.innerHTML).toContain('Fernando');
  });

  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('app-container')).toMatchSnapshot();
  });

  test('should display the correct address in JSON format', () => {
    render(<MyAwesomeApp />);
    const p = screen.getByText('{"zipCode":"ABC-123","country":"Canadá"}');
    expect(p).toBeTruthy();
  });
});