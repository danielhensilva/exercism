class School(object):
    def __init__(self):
        self.student_grades = []


    def add_student(self, name, grade):
        self.student_grades.append((name, grade))


    def roster(self):
        copied = self.student_grades[:]
        copied.sort(lambda x: f'{x[1]:03} {x[0]}', reverse=True)
        names = map(lambda x: x[0], copied)
        return list(names)


    def grade(self, grade_number):
        mapper = lambda x: x[0]
        mapped = map(mapper, self.student_grades)
        students = list(mapped)
        students.sort()
        return students
