import _ from 'lodash';

interface User {
  name: string;
  id: number;
  isAdmin?: boolean;
  address: { city: string };
}

describe('Object Cloning Tests', () => {
  let originalUser: User;

  beforeEach(() => {
    // Reset the original user before each test
    originalUser = {
      name: "Hayes",
      id: 0,
      isAdmin: true,
      address: { city: "Paris" }
    };
  });

  test('spread operator creates shallow copy', () => {
    const shallowCopy: any = { ...originalUser };
    shallowCopy.address.city = 'London';
    
    // The original object's nested property should also change (shallow copy)
    expect(shallowCopy.address.city).toBe('London');
    expect(originalUser.address.city).toBe('London');
    
    // Non-nested properties should not affect original
    shallowCopy.name = 'John';
    expect(shallowCopy.name).toBe('John');
    expect(originalUser.name).toBe('Hayes');
  });

  test('JSON parse/stringify creates deep copy', () => {
    const deepCopy = JSON.parse(JSON.stringify(originalUser));
    deepCopy.address.city = 'Paris';
    
    // The original object should not be affected (deep copy)
    expect(deepCopy.address.city).toBe('Paris');
    expect(originalUser.address.city).toBe('Paris');
    
    // Non-nested properties should also not affect original
    deepCopy.name = 'John';
    expect(deepCopy.name).toBe('John');
    expect(originalUser.name).toBe('Hayes');
  });

  test('lodash cloneDeep creates deep copy', () => {
    const deepCopy = _.cloneDeep(originalUser);
    deepCopy.address.city = 'USA';
    
    // The original object should not be affected (deep copy)
    expect(deepCopy.address.city).toBe('USA');
    expect(originalUser.address.city).toBe('Paris');
    
    // Non-nested properties should also not affect original
    deepCopy.name = 'John';
    expect(deepCopy.name).toBe('John');
    expect(originalUser.name).toBe('Hayes');
  });
}); 