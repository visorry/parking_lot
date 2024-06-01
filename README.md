# Parking Lot System

## Overview

This is an automated ticketing system for a multi-storey parking lot. The system allows customers to use the parking lot without human intervention. It supports the following functionalities:
- Issue tickets to cars entering the parking lot.
- Allocate the nearest available parking slot to incoming cars.
- Track the registration number and color of parked cars.
- Mark slots as available when cars leave.
- Query the system for various details such as registration numbers by color, slot number by registration number, etc.

## Features

- Create a parking lot with a specified number of slots.
- Park cars in the nearest available slot.
- Leave the parking lot, freeing up a slot.
- Display the current status of the parking lot.
- Retrieve registration numbers of cars by color.
- Retrieve slot numbers of cars by color.
- Retrieve the slot number of a car by its registration number.
- Interactive command prompt for manual input.
- File input mode for batch processing of commands.

## Directory Structure

```
parking_lot/
├── bin/
│   ├── setup
│   └── parking_lot
├── src/
│   ├── main/
│   │   ├── index.js
│   │   ├── commands.js
│   │   ├── parkingLot.js
│   │   └── ticket.js
│   └── test/
│       └── parkingLot.test.js
├── Dockerfile
├── docker-compose.yml
├── Makefile
├── package.json
└── README.md
```

## Installation

### Prerequisites

- Docker
- Docker Compose

### Steps

Run the setup script to install dependencies and run tests:
   ```bash
   ./bin/setup
   ```

## Usage

### Interactive Mode

To run the program in interactive mode:

```bash
./bin/parking_lot
```

Example session:
```
$ create_parking_lot 6
Created a parking lot with 6 slots
$ park KA-01-HH-1234 White
Allocated slot number: 1
$ park KA-01-HH-9999 White
Allocated slot number: 2
$ leave 1
Slot number 1 is free
$ status
Slot No.    Registration No    Colour
2           KA-01-HH-9999      White
$ exit
```

### File Input Mode

To run the program with input from a file:

```bash
./bin/parking_lot <file_path>
```

Example:
```bash
./bin/parking_lot file_inputs.txt
```

Contents of `file_inputs.txt`:
```
create_parking_lot 6
park KA-01-HH-1234 White
park KA-01-HH-9999 White
leave 1
status
exit
```

### Available Commands

- `create_parking_lot <capacity>`: Creates a parking lot with the specified number of slots.
- `park <registration_number> <color>`: Parks a car with the given registration number and color.
- `leave <slot_number>`: Frees up the slot number.
- `status`: Displays the current status of the parking lot.
- `registration_numbers_for_cars_with_colour <color>`: Lists the registration numbers of all cars of the specified color.
- `slot_numbers_for_cars_with_colour <color>`: Lists the slot numbers of all cars of the specified color.
- `slot_number_for_registration_number <registration_number>`: Displays the slot number for the given registration number.
- `exit`: Exits the interactive command prompt.

## Running Tests

To run the tests:

```bash
npm test
```

## Docker

### Build the Docker Image

To build the Docker image:

```bash
docker-compose build
```

### Running the Container

To run the container in interactive mode:

```bash
docker-compose run --rm parking_lot
```

To run the container with input from a file:

```bash
docker-compose run --rm parking_lot node src/main/index.js <file_path>
```

## License

This project is solely for educational purposes and is not licensed for distribution or commercial use. Sharing this project on any public platform is strictly prohibited. All rights reserved to the author.

