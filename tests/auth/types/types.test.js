import { types } from './../../../src/auth/types/types'

describe('Types', () => {

  test('should return types', () => {
    
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  })
})