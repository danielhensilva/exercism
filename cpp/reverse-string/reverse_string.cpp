#include "reverse_string.h"
namespace reverse_string {

  string reverse_string(string value) {
      const int length = value.length();
      char temp = '\0';
      for (int i = 0; i < length/2; i++) {
          temp = value[i];
          value[i] = value[length-1-i];
          value[length-1-i] = temp;
      }
      return value;
  }

}

