class School(object):
    def __init__(self):
        self.student_grades = []


    def add_student(self, name, grade):
        self.student_grades.append((name, grade))


    def roster(self):
        copied = self.student_grades[:]
        copied.sort(key=lambda x: f'{x[1]:03} {x[0]}')
        names = map(lambda x: x[0], copied)
        return list(names)


    def grade(self, grade):
        copied = self.student_grades[:]
        filtered = filter(lambda x: x[1] == grade, copied)
        mapped = map(lambda x: x[0], filtered)
        students = list(mapped)
        students.sort()
        return students
