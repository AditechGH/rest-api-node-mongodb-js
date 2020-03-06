# Install node v10
FROM node:10

# Set the workdir /var/www/myapp
WORKDIR /var/www/myapp

# Copy the package.json to workdir
COPY package.json ./

# Run npm install - install the npm dependencies
RUN npm install

# Copy application source
COPY . .

EXPOSE 3000 3001

# Generate build
RUN npm run build

# Start the application
CMD ["npm", "run", "run:prod"]