# =====
# This Dockerfile is for CI only
# =====

from node:6.1.0

# Create working directory
RUN mkdir /app
WORKDIR /app

# Ensure yarn is installed
RUN npm install -g yarn

# Install dependencies
RUN yarn

# Get the things
ADD . /app

# Install AWS CLI
RUN apt-get update
RUN apt-get -y install awscli
