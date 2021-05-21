import { render, screen } from '@testing-library/react';

import { Brand } from 'components/UI/Brand/Brand';

describe('Brand component', () => {
  test('render "Weather Framed" title', () => {
    render(<Brand />);

    const titleElement = screen.getByText('Weather Framed');
    expect(titleElement).toBeInTheDocument();
  });

  test('render "Logo', () => {
    render(<Brand />);

    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'logo.png');
    expect(logo).toHaveAttribute('alt', 'brand logo');
  });
});
