export interface ExamBody {
  student_id: number | undefined;
  course_name: string | undefined;
  teacher_id: number | undefined;
  semester_number: string | undefined;
  exam_type: string | undefined;
  exam_name: string | undefined;
  obt_marks: string | undefined;
  total_marks: string | undefined;
  exam_date: string | undefined;
}

export interface ExamAddSuccess {
  message: string;
  code: string;
  status: string;
  body: [];
}
export interface SuccessResponse {
  message: string;
  code: number;
  status: string;
  body: [];
}

