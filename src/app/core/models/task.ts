import { TaskStatusEnum } from "../../shared/enums/task-status.enum";
import { TaskProject } from "./project";

export interface Task {
    id: number;
    title: string;
    status: TaskStatusEnum | string;
    description: string;
    tags: string[];
    project?: TaskProject;
    comments: Comment[];
    files: File[];
    subtasks: Subtask[];
}

export interface TaskByStatus {
    [status: TaskStatusEnum | string]: Task[];
}

export interface TaskListByStatus {
    name: TaskStatusEnum | string;
    taskList: Task[];
}

export interface Comment {
    user: string;
    value: string;
}

export interface File {
    type: string;
    value: string;
}

export interface Subtask {
    title: string;
    done: boolean;
}