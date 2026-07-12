#include <string>

namespace log_line {
std::string message(std::string line) {
    const int index_of_message = line.find("]: ");
    return line.substr(index_of_message + 3);
}

std::string log_level(std::string line) {
  const int start_index = line.find("[");
  const int end_index = line.find("]");
  return line.substr(start_index + 1, end_index - 1);
}

std::string reformat(std::string line) {
  return message(line) + " (" + log_level(line) + ")";
}
}
