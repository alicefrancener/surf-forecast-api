import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792728;
    const lng = 151.289827;

    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual({});
  });
});
