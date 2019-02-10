export class GradeSchool {

  constructor() {
    this._studentGrades = [];
  }

  add(name, grade) {
    this._studentGrades.push({name, grade});
  }

  roster() {
    const output = {};

    for (const item of this._studentGrades) {
      if (output[item.grade] == null) {
        output[item.grade] = [];
      }
    }

    for (const item of this._studentGrades) {
      output[item.grade].push(item.name);
    }

    for (const grade of Object.keys(output)) {
      output[grade] = output[grade].sort();
    }

    return output;
  }

  grade(value) {
    return this._studentGrades
      .filter(x => x.grade === value)
      .map(x => x.name)
      .sort();
  }

}
