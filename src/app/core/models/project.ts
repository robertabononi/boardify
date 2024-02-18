import { Task } from "./task";

export interface Project {
    id: string;
    title: string;
    color: string;
    progressPercentage: number;
    createdDate: string;
    updateDate: string;
    endDate: string | null;
    tasks: Task[];
}