import { getGifs } from '../../src/helpers/getGift';
describe('Test helper getGifsGifs()', () => {
  test('debe de retornar un arreglo de gifs', async () => {
    const gits = await getGifs('One Punch')
    expect(gits.length).toBeGreaterThan(0)
    expect(gits[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})