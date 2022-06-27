import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test in hook useFetchGifs', () => {
  test('- Debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { images, isLoading } = result.current;

    expect(images).toHaveLength(0)
    expect(isLoading).toBeTruthy()
  })

  test('- Debe de retornar un arreglo de imagens y isLoading en false', async() => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    )

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
   })
 })