import { render, screen } from '@testing-library/react';

import WeatherInformation from './WeatherInformation';

describe('Weather Information component', () => {
  test('Should render "Celsius" Logo', () => {
    render(<WeatherInformation />);

    const logos = screen.getAllByRole('img');
    expect(logos[0]).toHaveAttribute('alt', 'Celsius Icon');
  });

  test('Should render "Weather" Logo', () => {
    render(<WeatherInformation />);

    const logos = screen.getAllByRole('img');
    expect(logos[1]).toHaveAttribute('alt', 'Weather Icon');
  });
});
