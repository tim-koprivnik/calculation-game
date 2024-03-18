# Use an official Node v21 runtime as a parent image
FROM node:21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) from calculation-game folder to the working directory
COPY calculation-game/package*.json ./
# If you're using Yarn, you might also want to copy yarn.lock
# COPY calculation-game/package.json calculation-game/yarn.lock ./

# Install project dependencies
RUN npm install
# For Yarn, use: RUN yarn install

# Copy the rest of the app's source code from calculation-game folder to your image filesystem.
COPY calculation-game/ ./

# Build the app for production
RUN npm run build
# For Yarn, use: RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
# For Yarn, use: CMD ["yarn", "start"]
