# Use an official Golang image as the base
FROM golang:latest

# Set the working directory inside the container
WORKDIR /go/src/app

# Copy the Go source file into the container
COPY hello.go .

# Build the Go program
RUN go build -o hello hello.go

# Run the compiled program when the container starts
CMD ["./hello"]

