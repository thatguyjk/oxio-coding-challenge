import { render, screen } from '@testing-library/react';
import MyComponent from '../../src/components/MyComponent';

describe('MyComponent', () => {
  test('renders the component', () => {
    render(<MyComponent />);
    const componentElement = screen.getByTestId('my-component');
    expect(componentElement).toBeInTheDocument();
  });

  // Add more tests for your component here
});