
it('Asymmetric object test', () => {
expect({
    age: 23,
    name: 'Andrei Fidelman',
    position: 'Front-End',
    adress: {
    	street: 'Libicka',
    	house: '10'
    },
    skills: ['JS', 'CSS', 'HTML']
  }).toEqual({
  	// describe all properties
    age: expect.any(Number),
    name: expect.stringMatching('Andrei'),
    position: expect.anything(),
    adress: expect.objectContaining({
    	street: 'Libicka'
    }),
    skills: expect.arrayContaining(['JS'])
  });
});

// expect.anything() - matches everything, except null and undefined
// expect.any(<constructor>) - checks, that actual value is instance of provided <constructor>.
// expect.objectContaining(<object>) - compares only keys, that exist in provided object. All other keys of actual value will be ignored.
// expect.arrayContaining(<array>) - checks that all items from the provided array are exist in actual value. It allows to have more values in actual.
// expect.stringMatching(<string|Regexp>) - checks that actual value has matches of provided expectation.