# Variables
NODE = node

# Targets
.PHONY: all
all: setup

.PHONY: setup
setup:
    @echo "Setting up project..."
    @npm install

.PHONY: test
test:
    @echo "Running tests..."
    @$(NODE) ./node_modules/.bin/jest

.PHONY: clean
clean:
    @echo "Cleaning up..."
    @rm -rf node_modules

.PHONY: run
run:
    @$(NODE) src/main/index.js

# Default target
.DEFAULT_GOAL := all
