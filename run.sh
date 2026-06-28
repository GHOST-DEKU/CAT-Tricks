#!/bin/bash
echo "Starting local setup..."

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "Error: Node.js is not installed."
    echo "Please download and install Node.js from https://nodejs.org/"
    exit 1
fi

echo "Node.js is installed. Installing dependencies..."
npm install

echo "Starting the development server..."
npm run dev
