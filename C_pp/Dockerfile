# Use an official gcc image as the base
FROM gcc:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the C++ source file into the container
COPY hello.cpp .

# Compile the C++ program
RUN g++ -o hello hello.cpp

# Run the compiled program when the container starts
CMD ["./hello"]

