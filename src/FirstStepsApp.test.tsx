import { render, screen } from "@testing-library/react";
import { afterEach, describe,  expect,  test, vi } from "vitest";
import { FirstStepsApp } from "./main";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="ItemCounter" />
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props) => mockItemCounter(props)
}))

// vi.mock('./shopping-cart/ItemCounter', () => (
//   {
//     ItemCounter: (props: unknown) =>
//       <div data-testid="ItemCounter" name={props.name} quantity={props.quantity} />
//   }
// ))
describe('FirstStepsApp', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {

    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
    console.log(container.innerHTML);
    
    screen.debug();
    
  });

  test('should render the correct number od ItemCounter components', () => {
    render(<FirstStepsApp />);
    const itemCounterElements = screen.getAllByTestId('ItemCounter');
    expect(itemCounterElements.length).toBe(3);
  });
  
  test('should render ItemConter with correct props ', () => {
    render(<FirstStepsApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenNthCalledWith(1, { name: 'Nintendo Switch 2', quantity: 1 });
    expect(mockItemCounter).toHaveBeenNthCalledWith(2, { name: 'Pro Controller', quantity: 2 });
    expect(mockItemCounter).toHaveBeenNthCalledWith(3, { name: 'Super Smash', quantity: 5 });
  });
});