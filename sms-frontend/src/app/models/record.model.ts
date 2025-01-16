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
