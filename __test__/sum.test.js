const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('the La Croix cans on my desk', () => {
  it('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
  it('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });
});