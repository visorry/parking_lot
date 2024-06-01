const ParkingLot = require('./parkingLot');

class CommandExecutor {
  constructor() {
    this.parkingLot = new ParkingLot();
  }

  execute(commandLine) {
    const [command, ...args] = commandLine.split(' ');
    switch (command) {
      case 'create_parking_lot':
        return this.parkingLot.createParkingLot(parseInt(args[0]));
      case 'park':
        return this.parkingLot.park(args[0], args[1]);
      case 'leave':
        return this.parkingLot.leave(parseInt(args[0]));
      case 'status':
        return this.parkingLot.status();
      default:
        return 'Invalid command';
    }
  }
}

module.exports = CommandExecutor;
