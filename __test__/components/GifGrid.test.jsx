import { GifGrid } from '../../src/components/GifGrid';
import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test en <GifGrid/>', () => {
  const category = 'One Punch';
  test('- Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      loading: true,
    })

    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  })
  test('- Debe de mostrar items cuando se cargen las imágenes useFetchGif', () => {

    const gifs = [
      {
      id: 'ABC',
      url: 'https://localhost/category/One Punch/ABC.gif',
      title: 'One Punch',
      },
      {
      id: 'AB23C',
      url: 'https://localhost/category/One Punch/lolo.gif',
      title: 'One Lolo',
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      loading: false
    })
    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
 })
