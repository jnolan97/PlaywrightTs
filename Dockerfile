FROM node:20.11.1-bookworm-slim

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH


# Copy package.json and package-lock.json from the host to the container's working directory
COPY package.json package-lock.json ./

# Install Node.js dependencies using npm ci (clean install)
RUN npm ci

RUN npm install
RUN npx playwright install chrome

COPY . .

CMD ["npx", "playwright", "test"]

# Get the needed libraries to run Playwright
# RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev