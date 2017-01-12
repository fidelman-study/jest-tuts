const houseForSale = {
    bath: true,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white'
    },
  bedrooms: 4
};
const desiredHouse = {
    bath: true,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        wallColor: 'white'
    }
};

describe('looking for a new house', () => {
    it('the house has my desired features', () => {
        expect(houseForSale).toMatchObject(desiredHouse);
    });
});