import { render, screen } from "@testing-library/react"
import { GifItem } from '../../src/components/GifItem';

describe('Test in <GifItem/>', () => {
  const title = 'Test title'
  const url = 'https://via.placeholder.com/150'

  test('- Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('- Debe de tener una imagen con la URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('- Debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})