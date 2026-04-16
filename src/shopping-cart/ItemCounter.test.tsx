import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
  test('should render with default values', () => {
    const name = 'Apple';

    render(<ItemCounter name={name} />);
    // screen.debug();  
    expect(screen.getByText(name)).toBeDefined();

    expect(screen.getByText(name)).not.toBeNull();
  });

  test('should render with custom quantity', () => {
    const name = 'Banana';
    const quantity = 5;

    render(<ItemCounter name={name} quantity={quantity} />);
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should increment the count when +1 button is clicked', () => {
    render(<ItemCounter name="Orange" quantity={1} />);
    const [buttonAdd] = screen.getAllByRole('button');
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);
    expect(screen.getByText(3)).toBeDefined();
  });
  test('should decrease the count when -1 button is pressed', () => {
    const quantity = 5;
    render(<ItemCounter name="Orange" quantity={quantity} />);
    const [,buttonDecrease] = screen.getAllByRole('button');
    fireEvent.click(buttonDecrease);
    fireEvent.click(buttonDecrease);
    expect(screen.getByText(3)).toBeDefined();
  });

  test('should not decrease the count when -1 button is pressed and quantity is 0', () => {
    render(<ItemCounter name="Orange" quantity={1} />);
    const [, buttonDecrease] = screen.getAllByRole('button');
    fireEvent.click(buttonDecrease);
    expect(screen.getByText(1)).not.toBeNull();

   });
});