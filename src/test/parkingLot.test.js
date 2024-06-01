const ParkingLot = require('../main/parkingLot');

test('create parking lot', () => {
  const parkingLot = new ParkingLot();
  expect(parkingLot.createParkingLot(6)).toBe('Created a parking lot with 6 slots');
});

test('park car', () => {
  const parkingLot = new ParkingLot();
  parkingLot.createParkingLot(6);
  expect(parkingLot.park('KA-01-HH-1234', 'White')).toBe('Allocated slot number: 1');
  expect(parkingLot.park('KA-01-HH-9999', 'White')).toBe('Allocated slot number: 2');
});

test('leave slot', () => {
  const parkingLot = new ParkingLot();
  parkingLot.createParkingLot(6);
  parkingLot.park('KA-01-HH-1234', 'White');
  expect(parkingLot.leave(1)).toBe('Slot number 1 is free');
});

test('status', () => {
  const parkingLot = new ParkingLot();
  parkingLot.createParkingLot(6);
  parkingLot.park('KA-01-HH-1234', 'White');
  parkingLot.park('KA-01-HH-9999', 'White');
  const expectedStatus =
    "Slot No.\n1\n2\n" +
    "Registration No\nKA-01-HH-1234\nKA-01-HH-9999\n" +
    "Colour\nWhite\nWhite\n";
  expect(parkingLot.status()).toBe(expectedStatus);
});

test('find registration numbers for cars with colour', () => {
  const parkingLot = new ParkingLot();
  parkingLot.createParkingLot(6);
  parkingLot.park('KA-01-HH-1234', 'White');
  parkingLot.park('KA-01-HH-9999', 'White');
  expect(parkingLot.registrationNumbersForCarsWithColour('White')).toBe('KA-01-HH-1234, KA-01-HH-9999');
});

test('find slot numbers for cars with colour', () => {
  const parkingLot = new ParkingLot();
  parkingLot.createParkingLot(6);
  parkingLot.park('KA-01-HH-1234', 'White');
  parkingLot.park('KA-01-HH-9999', 'White');
  expect(parkingLot.slotNumbersForCarsWithColour('White')).toBe('1, 2');
});

test('find slot number for registration number', () => {
    const parkingLot = new ParkingLot();
    parkingLot.createParkingLot(6);
    parkingLot.park('KA-01-HH-1234', 'White');
    expect(Number(parkingLot.findSlotNumberForRegistrationNumber('KA-01-HH-1234'))).toBe(1);
    expect(parkingLot.findSlotNumberForRegistrationNumber('MH-04-AY-1111')).toBe('Not found');
  });
