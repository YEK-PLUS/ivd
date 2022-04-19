import Methods from '../../src/methods'
describe('Methods', () => {
  const methods = new Methods()

  describe('IlList', () => {
    test('is exits', () => {
      expect(methods).toHaveProperty('IlList')
      expect(typeof methods.IlList).toBe('function')
    })
  })
  describe('DaireList', () => {
    test('is exits', () => {
      expect(methods).toHaveProperty('DaireList')
      expect(typeof methods.DaireList).toBe('function')
    })
  })
  describe('Org', () => {
    test('is exits', () => {
      expect(methods).toHaveProperty('Org')
      expect(typeof methods.Org).toBe('function')
    })
  })
})
