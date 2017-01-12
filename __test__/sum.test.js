describe('an essay on the best flavor', () => {
  it('mentions grapefruit', () => {
    expect('grapefruit').toMatch(/grapefruit/);
  })
})

describe('grapefruits are healthy', () => {
  it('grapefruits are a fruit', () => {
    expect('grapefruits').toMatch('fruit');
  })
})