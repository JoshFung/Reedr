# Use (inherit) node image rather than building own image
FROM node:18-alpine AS build

# Make this our working directory
WORKDIR /app

# Copy package.json and package-lock.json to /app before `npm install`
COPY ["package.json", "package-lock.json*", "./"]

# Install all dependencies
RUN npm install

# Retrive ARG from compose.yaml
ARG API_URL

# Set the environment variables 
ENV REACT_APP_API_URL=$API_URL

# Copy source code into our container (which has now installed our dependencies)
COPY . .

# Build the TS code
RUN npm run build

# Create the production image from the nginx image
FROM nginx:alpine AS production

# Specify we're using production environment
ENV NODE_ENV=production

# Copy the built code from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Start the application
CMD ["nginx", "-g", "daemon off;"]