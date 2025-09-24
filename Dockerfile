# Use Node.js official image
FROM node:18

# Install ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project
COPY . .

# Expose port
EXPOSE 8080

# Start your app
CMD ["npm", "start"]
