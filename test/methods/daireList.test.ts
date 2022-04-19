import daireList from '../../src/methods/daireList'
import Methods from '../../src/methods'

describe('daireList', () => {
  test('type daireList', () => expect(typeof daireList).toBe('function'))
  test('check daireList returns', async () => {
    const ilCode = '035'
    const response = await daireList.call(new Methods(), { ilCode })
    expect(response).toBeInstanceOf(Object)
    expect(response.status).toBe(true)
    expect(response.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: expect.any(String),
          name: expect.any(String),
          orgOid: expect.any(String),
          'code-name': expect.any(String),
          'name-code': expect.any(String),
          ilCode: ilCode,
        }),
      ])
    )
  })
})
