import { TaskStatusEnum } from "../../shared/enums/task-status.enum";

export class Task {
    id!: number;
    title!: string;
    status!: TaskStatusEnum | string;
    tags: string[] = [];
}