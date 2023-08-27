# Use the official Node.js image as the base image
FROM node:14 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a smaller and lightweight base image for serving the app
FROM nginx:alpine

# Copy the built app from the previous build stage into the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that the nginx server will listen on
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
