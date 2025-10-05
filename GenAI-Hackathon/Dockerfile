# Use an official lightweight Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy everything to container
COPY . .

# Install dependencies (if any package.json exists)
RUN npm install || true

# The extension doesn't have a server, but we’ll keep a simple static serve
RUN npm install -g serve

# Expose port for viewing files
EXPOSE 3000

# Run a simple local server
CMD ["serve", "-s", "."]
