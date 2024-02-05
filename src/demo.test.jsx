import { render } from '@testing-library/react';
import GifItem from './components/GifItem.jsx';
import { expect } from 'vitest';

describe('Demo', () => {
  const title = "Titulo";
  const url = "someUrl";
  test('should match snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot();
  })
})