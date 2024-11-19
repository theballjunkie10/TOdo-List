import {tasks} from '../mock/tasks.js';

export default class TasksModel{
    #boardtasks=tasks;

    get tasks(){
        return this.#boardtasks;
    }
    getTasksByStatus(status){
        return this.#boardtasks.filter(task=>task.status===status);
    }
}