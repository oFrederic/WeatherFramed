import { render, screen } from '@testing-library/react';

import WeatherDetails from './WeatherDetails';

describe('Weather Details component', () => {
  test('render "humidity" logo', () => {
    render(<WeatherDetails />);

    const logos = screen.getAllByRole('img');
    expect(logos[0]).toHaveAttribute('alt', 'Humidity Icon');
  });

  test('render "Wind" logo', () => {
    render(<WeatherDetails />);

    const logos = screen.getAllByRole('img');
    expect(logos[1]).toHaveAttribute('alt', 'Wind Icon');
  });
});
