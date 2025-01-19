import { Record } from "./record.model";

export interface CourseRecords {
  courseRecords: { courseCode: string; records: Record[] }[];
}

export interface CourseRecordsSuccess{
  message: string,
  status: string,
  code: number,
  body: {
    records:Record[],
    courseCode: string
  },
}