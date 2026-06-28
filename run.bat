@echo off
echo Starting local setup...

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed.
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is installed. Installing dependencies...
call npm install

echo Starting the development server...
call npm run dev

pause
