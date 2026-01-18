# Use a slim version of Node for security and speed
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files first to take advantage of Docker caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of the app source code
COPY . .

# Create db directory and initialize empty database
RUN mkdir -p db && echo "[]" > db/db.json

# Expose the port your app runs on
EXPOSE 3001

# Run the app
CMD ["node", "server.js"]
