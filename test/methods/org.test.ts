import org from '../../src/methods/org'
import Methods from '../../src/methods'

describe('org', () => {
  test('type org', () => expect(typeof org).toBe('function'))
  test('check valid org returns', async () => {
    const data = {
      ilCode: '34',
      vdCode: '034247',
      tckNo: '',
      vNo: '3090345332',
    }
    const response = await org.call(new Methods(), data)
    expect(response).toBeInstanceOf(Object)
    expect(response.status).toBe(true)
    expect(response.data).toEqual(
      expect.objectContaining({
        status: expect.any(String),
        status_text: expect.any(String),
        tckNo: data.tckNo,
        vkNo: data.vNo,
        vdCode: data.vdCode,
        title: expect.any(String),
        valid: true,
      })
    )
  })
  test('check wrong org returns', async () => {
    const data = {
      ilCode: '34',
      vdCode: '034247',
      tckNo: '',
      vNo: 'wrong-data',
    }
    const response = await org.call(new Methods(), data)
    expect(response).toBeInstanceOf(Object)
    expect(response.status).toBe(true)
    expect(response.data).toEqual(
      expect.objectContaining({
        status: undefined,
        status_text: undefined,
        tckNo: undefined,
        vkNo: undefined,
        vdCode: undefined,
        title: undefined,
        valid: false,
      })
    )
  })
})
