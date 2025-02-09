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

export interface AdminState {
  addCourseloader: boolean;
  error: boolean;
  errorMessage: string;
  courses: Courses[];
  addExamloader: boolean;
  addExamErr: boolean | string;
}

export interface CourseExam {
  name: string|null |undefined;
  semester_no: number | string;
  max_marks: number | string | null | undefined;
  min_marks: number | string | null | undefined;
  course_id: number | string | null | undefined;
  exam_code: number | string | null | undefined;
}
