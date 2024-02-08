import { Task } from "./task.model";

export class Project {
    id!: string;
    title!: string;
    tasks!: Task[];
}