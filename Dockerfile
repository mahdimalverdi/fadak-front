# Stage 2: Serve the application with a smaller image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files from the CI build stage
COPY .next ./.next
COPY public ./public
COPY next.config.js ./
COPY package.json ./
COPY package-lock.json ./

# Install only production dependencies
RUN npm ci --production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
