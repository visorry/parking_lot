.PHONY: all clean test

# Variables
SRC_DIR = src
BIN_DIR = bin
TEST_DIR = test

# Commands
all: $(BIN_DIR)/parking_lot

clean:
	rm -rf $(BIN_DIR)

test:
	# Add test commands here

# Targets
$(BIN_DIR)/parking_lot: $(SRC_DIR)/main/index.js $(SRC_DIR)/main/commands.js $(SRC_DIR)/main/parkingLot.js
	mkdir -p $(BIN_DIR)
	cp $(SRC_DIR)/main/index.js $(BIN_DIR)/parking_lot
	cp $(SRC_DIR)/main/commands.js $(SRC_DIR)/main/parkingLot.js $(BIN_DIR)

