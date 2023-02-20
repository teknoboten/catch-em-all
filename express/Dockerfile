FROM node:lts-alpine

# Create a working directory for your application
# inside the image, this is where the code lives 
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle source code inside the Docker image
COPY . .

# Tell Docker Daemon to map to 9000 
EXPOSE 9000

# Define command to run the app
CMD [ "node", "index.js" ]