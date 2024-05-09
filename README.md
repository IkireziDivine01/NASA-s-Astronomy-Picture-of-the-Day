# NASA Astronomy Picture of the Day (APOD) Viewer

## Overview
The NASA Astronomy Picture of the Day (APOD) Viewer is a React Typescripty-based web application that fetches and displays the daily astronomy picture from NASA's APOD API. The application includes additional features like a search function to find pictures from specific dates and a gallery showcasing a collection of recent images.

## Features
- **Fetch Data**: Retrieve information about NASA's astronomy picture of the day, including the image URL, title, explanation, and date.
- **Display Data**: Present the fetched data in a user-friendly interface with a high-quality image, title, explanation, and the picture's date.
- **Error Handling**: Implement robust error handling to display a user-friendly message if data fetching fails.
- **Search Functionality**: Allow users to search for specific dates using a date picker or text input field, fetching and displaying the APOD information for that date.
- **Image Gallery**: Showcase a collection of recent APOD images in a gallery format.

## Getting Started
To run the APOD Viewer, you'll need a valid NASA API key, a React development environment, and a package manager like npm or yarn.

### Prerequisites
- Node.js and npm/yarn
- A NASA API key (register at [NASA API Key](https://api.nasa.gov/))

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies with `npm install` or `yarn install`.

### Configuration
- In the code, replace `'YOUR_API_KEY'` with your actual NASA API key in the following files:
  - `ApodViewer.tsx`
  - `ApodGallery.tsx`

### Running the Application
To run the application in development mode, use:
```bash
npm start
```
or
```bash
yarn start
```
This will start the React development server and open the application in your default web browser.

## Usage
- **View Daily APOD**: The application displays the astronomy picture of the day along with relevant information.
- **Search by Date**: Use the date picker or text input field to search for a specific date and view the corresponding APOD.
- **Browse Image Gallery**: Navigate to the gallery to view a collection of recent APOD images.

## Troubleshooting
- If you encounter a 403 Forbidden error, ensure your API key is correct, valid, and hasn't expired.
- If the data fetch fails, check your network connection and ensure the NASA API service is online.
