import {tasks} from '../mock/tasks.js';
import generateUniqueIdentifier from '../utils.js';

export default class TasksModel{
    #boardtasks=tasks;
    #observers=[];

    get tasks(){
        return this.#boardtasks;
    }
    getTasksByStatus(status){
        return this.#boardtasks.filter(task=>task.status===status);
    }

    set tasks(value){
        this.#boardtasks=value;
    }

     clearTasks(){
        this.#boardtasks=this.#boardtasks.filter(task=>task.status!=='basket');
        this._notifyObservers();
        return this.#boardtasks;
    }

    addTask(title){
        const newTask={
            title,
            status:'backlog',
            id:generateUniqueIdentifier()
        };
        const length=this.#boardtasks.push(newTask);
        console.log(`Iris: ${length}`)
        this._notifyObservers();
        return newTask;
    }
    addObserver(observer){
        this.#observers.push(observer);
    }
    removeObserver(observer){
        this.#observers=this.#observers.filter((obs)=>obs!==observer)
    }
    _notifyObservers(){
        this.#observers.forEach((observer)=>observer());
    }
}