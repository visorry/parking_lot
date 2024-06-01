const ParkingLot = require('./parkingLot');

class CommandExecutor {
  constructor() {
    this.parkingLot = new ParkingLot();
  }
}

module.exports = CommandExecutor;
