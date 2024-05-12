# Use a minimal Linux image as the base
FROM debian:buster-slim

# Install gcc and related build tools
RUN apt-get update && apt-get install -y gcc

# Set the working directory inside the container
WORKDIR /usr/src/myapp

# Copy the C source file into the container
COPY hello.c .

# Compile the C program
RUN gcc -o hello hello.c

# Run the compiled program when the container starts
CMD ["./hello"]

