const Ticket = require('./ticket');

class ParkingLot {
  constructor() {
    this.capacity = 0;
    this.slots = [];
  }

  createParkingLot(capacity) {
    this.capacity = capacity;
    this.slots = Array(capacity).fill(null);
    return `Created a parking lot with ${capacity} slots`;
  }

  park(registrationNumber, color) {
    const slotIndex = this.slots.indexOf(null);
    if (slotIndex !== -1) {
      const ticket = new Ticket(slotIndex + 1, registrationNumber, color);
      this.slots[slotIndex] = ticket;
      return `Allocated slot number: ${slotIndex + 1}`;
    } 
    else {
      return 'Sorry, parking lot is full';
    }
  }



}

module.exports = ParkingLot;
