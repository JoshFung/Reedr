# Two stage dockerfile
# First stage: Build application with all dependencies
# Second stage: Only keep production dependencies

# Use (inherit) node image rather than building own image
FROM node:18-alpine AS build

# Make this our working directory
WORKDIR /app

# Copy package.json and package-lock.json to /app before `npm install`
# TODO: Do I really need "./"? 
COPY ["package.json", "package-lock.json*", "./"]

# Install all dependencies
RUN npm install

# Copy source code into our container (which has now installed our dependencies)
COPY . .

# Build the TS code
RUN npm run build

# Create the production image from the node image
FROM node:18-alpine AS production

# Specify we're using production environment
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy the built code from the build stage
COPY --from=build /app/dist ./dist

# Copy package.json and package-lock.json to /app before `npm install`
COPY ["package.json", "package-lock.json*", "./"]

# Only install dependencies (not devDependencies)
RUN npm install --production

# Set the environment variable PORT to 3000
ENV PORT=3000

# Start the application
CMD ["npm", "run", "start:prod"]