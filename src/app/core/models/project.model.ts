import { Task } from "./task.model";

export class Project {
    id!: string;
    title!: string;
    progressPercentage!: number;
    createdDate!: string;
    updateDate!: string;
    endDate!: string | null;
    tasks!: Task[];
}