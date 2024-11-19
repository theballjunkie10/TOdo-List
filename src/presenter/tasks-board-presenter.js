import TasksListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/task-board-component.js';
import {render,RenderPosition} from '../framework/render.js';
import {Status,StatusLabel} from '../const.js';
import CleanUpButtonComponent from '../view/reset-button-component.js';
import EmptyTaskComponent from '../view/empty-task-component.js';
import TaskPresenter from './task-presenter.js';
export default class TasksBoardPresenter {
 #tasksBoardComponent = new TaskBoardComponent()
 //taskListComponent = new TasksListComponent();
  #boardContainer=null;
  #tasksModel=null;
  #boardTasks=[];

 constructor({boardContainer, tasksModel}) {
   this.#boardContainer = boardContainer;
   this.#tasksModel=tasksModel;
   this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
 }


 init() {
    this.#boardTasks=[...this.#tasksModel.tasks];
   render(this.#tasksBoardComponent, this.#boardContainer);
   this.#renderBoard();
   
 
 }
 #renderTask(task,container){
  const taskComponent=new TaskComponent({task});
  const taskPresenter= new TaskPresenter({taskListContainer:container});
  taskPresenter.init(task)
  //render(taskComponent,container);
 }
 #renderBoard(){
  for (let status in Status) {
    this.status_title=Status[status];
    this.label=StatusLabel[`${this.status_title}`];
    console.log(`${this.status_title} label ${this.label}`);
    const tasksListComponent = new TasksListComponent({task_status:{status_title:this.status_title,label:this.label}});
    console.log(`happier now: ${tasksListComponent.status}`);
    render(tasksListComponent, this.#tasksBoardComponent.element);
    const tasksForStatus=this.#tasksModel.getTasksByStatus(this.status_title);
    console.log(`happier baby: ${tasksForStatus.length} ${status}`);
    if (tasksForStatus.length==0) {
      const emptyTaskComponent=new EmptyTaskComponent();
      render(emptyTaskComponent,tasksListComponent.element);
    }else{
    for (let j = 0; j < tasksForStatus.length; j++) {
        //const taskComponent = new TaskComponent({task:this.boardTasks[j]});
        //if (this.#boardTasks[j].status==this.status_title) {
          this.#renderTask(tasksForStatus[j],tasksListComponent.element);
          //render(taskComponent, tasksListComponent.element);
        //}
        
    }
   
  }
  if (this.status_title=="basket") {
    console.log("Why not");
    this.#renderResetButton(tasksListComponent.element);
  }
}
 }
 #renderResetButton(container){
  console.log("Clear board container");
  const cleanupComponent= new CleanUpButtonComponent({onClick:this.#clearAllTasks.bind(this)});
  render(cleanupComponent, container);
 }

 #clearAllTasks(){
  console.log("Clear board");
  this.#tasksModel.tasks=this.#tasksModel.clearTasks();
  //this.#clearBoard();
 }

 createTask(){
  const taskTitle=document.querySelector('#add-task').value.trim();
  if (!taskTitle) {
    return;
  }
  const newTask=this.#tasksModel.addTask(taskTitle);

  document.querySelector('#add-task').value='';
 }
 #handleModelChange(){
  this.#clearBoard();
  this.#renderBoard();
 }
 #clearBoard(){
  //console.log(`remember: {this.#tasksBoardComponent.element}`)
  this.#tasksBoardComponent.element.innerHTML='';
 }
}

