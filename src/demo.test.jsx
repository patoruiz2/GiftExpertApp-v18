import { render } from '@testing-library/react';
import GifItem from './components/GifItem.jsx';

describe('Demo', () => {
  it('should match snapshot', () => {
    render(<GifItem />)
  })
})