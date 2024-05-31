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

  leave(slotNumber) {
    if (this.slots[slotNumber - 1]) {
      this.slots[slotNumber - 1] = null;
      return `Slot number ${slotNumber} is free`;
    } else {
    //   return `////////////`;
    }
  }

  status() {
    let status = 'Slot No.\n';
    let registrationNumbers = 'Registration No\n';
    let colors = 'Colour\n';
    this.slots.forEach((slot, index) => {
      if (slot) {
        status += `${index + 1}\n`;
        registrationNumbers += `${slot.registrationNumber}\n`;
        colors += `${slot.color}\n`;
      }
    });
    return status + registrationNumbers + colors;
  }

  registrationNumbersForCarsWithColour(color) {
    const registrationNumbers = this.slots
      .filter(slot => slot && slot.color === color)
      .map(slot => slot.registrationNumber);
    return registrationNumbers.length ? registrationNumbers.join(', ') : 'Not found';
  }



}

module.exports = ParkingLot;
