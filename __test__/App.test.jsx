import { App } from '../src/App';
import { render,screen } from '@testing-library/react';

describe('Test in <App/>', () => {
  test('- Debe de hacer match con el snapshot', () => {
    render(<App />);
    const { container } = screen
    expect(container).toMatchSnapshot()
   })
})