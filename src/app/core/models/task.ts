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

export interface TaskByStatus {
    [status: TaskStatusEnum | string]: Task[];
}

export interface TaskListByStatus {
    name: TaskStatusEnum | string;
    taskList: Task[];
}