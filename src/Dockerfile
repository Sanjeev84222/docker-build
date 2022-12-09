FROM node:alpine
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json ./    
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH
# Copy app files
COPY . .
COPY package-lock.json ./
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]