import { render, screen } from '@testing-library/react';
import testPeepData from './testPeeps.json';
import PeepFeed from './PeepFeed';

jest.mock(`./PeepCard.jsx`, () => () => <div data-testid='hlc' />);

describe('PeepFeed component Tests', () => {
  it('should render the correct number of PeepCard components', () => {
    // ARRANGE
    render(<PeepFeed peepData={testPeepData.peeps} />);

    // ACT
    const peepCards = screen.getAllByTestId('hlc');

    // ASSERT
    expect(peepCards.length).toBe(testPeepData.peeps.length);
  });
  it(`should render "Peeps are loading..." if the peepData array is empty`, () => {
    // ARRANGE
    render(<PeepFeed peepData={[]} />);

    // ACT
    const loading = screen.getByText('Content is loading...');

    // ASSERT
    expect(loading).toBeInTheDocument();
  });

  it(`should render "Peeps are loading..." if the peepData prop is not an array-like item`, () => {
    // ARRANGE
    render(<PeepFeed />);

    // ACT
    const loading = screen.getByText('Content is loading...');

    // ASSERT
    expect(loading).toBeInTheDocument();
  });
});
