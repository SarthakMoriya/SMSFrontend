export interface Record {
  stu_name: string | null | undefined;
  date_enrolled: string | null | undefined;
  teacher_id: number | null | undefined;
  course: string | null | undefined;
  rollno: number | null | undefined | string;
}

export interface Records {
  records: Record[] | [];
}

export interface StudentRecord {
  studId: number | null | undefined;
  stu_name: number | null | undefined;
  date_enrolled: SVGStringList;
  teacher_id: number | null | undefined;
  profile: number | null | undefined;
  certificate: number | null | undefined;
  course: number | null | undefined;
  rollno: number | null | undefined;
  uni_roll_no: number | null | undefined;
  duration: number | null | undefined;
  semester: number | null | undefined;
  batch: string;
  overall_percentage: string | undefined;
  semester_done: number | null | undefined;
}
