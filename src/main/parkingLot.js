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
  
}

module.exports = ParkingLot;
