# Parking Lot System

## Overview
This project implements an automated ticketing system for a multi-storey parking lot. It allows customers to park their cars and provides functionality for ticket issuance, slot allocation, and vehicle retrieval. The system also supports querying for information such as registration numbers and slot numbers based on various criteria, including color.

## Features
- Creation of a multi-storey parking lot with configurable slots
- Allocation of parking slots to incoming cars
- Retrieval of parked cars based on registration number and color
- Display of current parking lot status

## Directory Structure
The project follows a well-organized directory structure for easy navigation and maintenance:

```
parking_lot/
├── bin/            # Contains executable scripts for project setup and execution
│   ├── setup       # Script for setting up the project environment
│   └── parking_lot # Script for running the parking lot system
├── src/            # Contains source code files
│   ├── main/       # Contains main project code files
│   └── test/       # Contains test files for unit and integration testing
├── .gitignore      # Specifies intentionally untracked files to ignore
├── README.md       # Project documentation with clear instructions
└── package.json    # Contains metadata and dependencies for the project
```

## Build Approach
The project uses a simple build approach with executable scripts and npm for managing dependencies:

- `bin/setup`: Script for setting up the project environment, installing dependencies, and running tests.
- `bin/parking_lot`: Script for executing the parking lot system with input from a file or interactive shell.

## Usage

### Setting Up Environment

To install dependencies and set up the project, run the setup script:

```bash
./bin/setup
```

### Running the Program

You can interact with the parking lot system in two ways:

#### Interactive Mode

Launch the interactive shell to input commands manually:

```bash
./bin/parking_lot
```

#### File Input Mode

Provide a filename as a parameter to read commands from a file:

```bash
./bin/parking_lot file_inputs.txt
```
You can use the provided file_inputs.txt file for testing.

### Commands

The system supports the following commands:

- `create_parking_lot <number>`: Creates a parking lot with the specified number of slots.
- `park <registration_number> <color>`: Parks a car with the given registration number and color.
- `leave <slot_number>`: Removes the car from the specified slot.
- `status`: Displays the current status of the parking lot.
- `registration_numbers_for_cars_with_colour <color>`: Retrieves registration numbers of cars with the specified color.
- `slot_numbers_for_cars_with_colour <color>`: Retrieves slot numbers of cars with the specified color.
- `slot_number_for_registration_number <registration_number>`: Retrieves the slot number for the car with the specified registration number.
- `exit`: Terminates the program and returns control to the shell.

## License

This project is solely for educational purposes and is not licensed for distribution or commercial use. Sharing this project on any public platform is strictly prohibited. All rights reserved to the author.
