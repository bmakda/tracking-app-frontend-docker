# Tracking App Frontend

This is the frontend application for the Tracking App, which allows customers to manage tracking plans and events Burhan Makda.

## Prerequisites

- Node.js
- npm
- Docker (optional, for running the application in a Docker container)

## Getting Started

Follow these steps to set up and run the frontend application.

### 1. Clone the Repository

Clone the repository to your local machine:

```sh
git clone https://github.com/bmakda/tracking-app-frontend-docker.git
cd tracking-app-frontend-docker
```

### 2. Install Dependencies

Install the project dependencies using npm:
```sh
npm install
```

3. Run the Application (Local Development)
Start the development server:

```sh
npm start
```

The application will be accessible at http://localhost:3000.

### 4. Build the Docker Image (Optional)
If you prefer to run the application in a Docker container, you can build the Docker image:

```sh
docker build -t tracking-app-frontend-docker .
```
### 5. Run the Docker Container (Optional)
Run the Docker container:

```sh
docker run -p 8080:80 -d tracking-app-frontend-docker
```

The application will be accessible at http://localhost:8080.

### 6. Additional Information
The application is built using React and incorporates Material-UI components for styling by Burhan Makda.
The local development server runs on port 3000 by default.
When using Docker, the application is served by an Nginx server inside the container on port 80.

### 7. License
This project is licensed under the MIT License - see the LICENSE file for details.

