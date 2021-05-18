import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  test('render "Search Different Location"', () => {
    render(<SearchBar />);

    const labelElement = screen.getByText('Search Different Location');
    expect(labelElement).toBeInTheDocument();
  });

  test('render an input element', () => {
    render(<SearchBar />);

    const inputPlaceholder = screen.queryByPlaceholderText('City Name');
    expect(inputPlaceholder).toBeInTheDocument();
  });
});
