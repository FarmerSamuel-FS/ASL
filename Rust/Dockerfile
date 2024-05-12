# Use the official Rust image for building
FROM rust:latest AS builder

# Set the working directory in the container
WORKDIR /ASL_Assignment/Rust

# Copy the Rust application code and Cargo.toml into the container
COPY . .

# Build the Rust application
RUN cargo build --release

# Use an Ubuntu-based image for the final container
FROM ubuntu:latest

# Set the working directory in the container
WORKDIR /ASL_Assignment/Rust

# Copy the compiled binary from the builder stage
COPY --from=builder /ASL_Assignment/Rust/target/release/myapp .

# Run the Rust application
CMD ["./myapp"]


