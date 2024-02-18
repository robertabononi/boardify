import { TaskStatusEnum } from "../../shared/enums/task-status.enum";

export interface Task {
    id: number;
    title: string;
    status: TaskStatusEnum | string;
    tags: string[];
    project?: {
        id: string;
        title: string;
    };
}