# Use the official Ubuntu image
FROM ubuntu:latest

# Update package lists and install Lua
RUN apt-get update && apt-get install -y lua5.3

# Set the working directory in the container
WORKDIR /usr/src/ASL_Assignment

# Copy the current directory contents into the container at /usr/src/myapp
COPY . .

# Run Lua script
CMD [ "lua5.3", "./hello.lua" ]

