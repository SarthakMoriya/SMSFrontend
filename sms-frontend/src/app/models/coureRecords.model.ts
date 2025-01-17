import { Record } from "./record.model";

export interface CourseRecords {
  courseRecords: { courseCode: string; records: Record[] }[];
}
