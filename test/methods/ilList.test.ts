import ilList from '../../src/methods/ilList'
import Methods from '../../src/methods'

describe('ilList', () => {
  test('type ilList', () => expect(typeof ilList).toBe('function'))
  test('check ilList returns', async () => {
    const response = await ilList.call(new Methods())
    expect(response).toBeInstanceOf(Object)
    expect(response.status).toBe(true)
    expect(response.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: expect.any(String),
          name: expect.any(String),
        }),
      ])
    )
  })
})
