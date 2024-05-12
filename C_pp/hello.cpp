#include <iostream>
#include <ctime>

int main() {
    std::cout << "Hello ASL!" << std::endl;

    // Get the current time
    std::time_t now = std::time(nullptr);
    std::cout << "Today is " << std::asctime(std::localtime(&now));

    return 0;
}

