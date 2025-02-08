export interface Course {
  semesters: number;
  name: string;
  code: string;
}

export interface Courses {
  id: number;
  name: string;
  code: string;
  semesters: number;
}

export interface AdminState{
    addCourseloader: boolean,
    error: boolean,
    errorMessage: string,
    courses: Courses[],
}