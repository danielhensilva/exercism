#include <array>
#include <string>
#include <vector>

// Round down all provided student scores.
std::vector<int> round_down_scores(std::vector<double> student_scores) {
  std::vector<int> new_student_scores;
  for (auto score : student_scores) {
    int new_score = static_cast<int>(score);
    new_student_scores.emplace_back(new_score);
  }
  return new_student_scores;
}

// Count the number of failing students out of the group provided.
int count_failed_students(std::vector<int> student_scores) {
  int count{0};
  for (auto score : student_scores) {
    if (score <= 40) {
      count++;
    }
  }
  return count;
}

// Create a list of grade thresholds based on the provided highest grade.
std::array<int, 4> letter_grades(int highest_score) {
  std::array<int, 4> result{41};
  int even_space = (highest_score - 40)/4;
  for (int i = 1; i < 4; i++) {
    result[i] = result[i-1] + even_space;
  }
  return result;
}

// Organize the student's rank, name, and grade information in ascending order.
std::vector<std::string> student_ranking(std::vector<int> student_scores, std::vector<std::string> student_names) {
  std::vector<std::string> result;
  for (int i = 0; i < student_scores.size(); i++) {
    std::string info = std::to_string(i+1) + ". " + student_names[i] + ": " + std::to_string(student_scores[i]);
    result.emplace_back(info);
  }
  return result;
}

// Create a string that contains the name of the first student to make a perfect
// score on the exam.
std::string perfect_score(std::vector<int> student_scores, std::vector<std::string> student_names) {
  for (int i = 0; i < student_scores.size(); i++) {
    if (student_scores[i] == 100) {
      return student_names[i];
    }
  }
  return "";
}
