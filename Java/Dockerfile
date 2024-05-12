# Use an openjdk image as the base
FROM openjdk:latest

# Set the working directory inside the container
WORKDIR /usr/src/myapp

# Copy the Java source file into the container
COPY Hello.java .

# Compile the Java program
RUN javac Hello.java

# Run the compiled program when the container starts
CMD ["java", "Hello"]

