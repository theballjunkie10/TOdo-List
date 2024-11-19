import TasksListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/task-board-component.js';
import {render,RenderPosition} from '../framework/render.js';
import {Status,StatusLabel} from '../const.js';
import CleanUpButtonComponent from '../view/clean-up-button-component.js';
export default class TasksBoardPresenter {
 tasksBoardComponent = new TaskBoardComponent()
 //taskListComponent = new TasksListComponent();


 constructor({boardContainer, tasksModel}) {
   this.boardContainer = boardContainer;
   this.tasksModel=tasksModel;
 }


 init() {
    this.boardTasks=[...this.tasksModel.getTasks()];
   render(this.tasksBoardComponent, this.boardContainer);
   for (let status in Status) {
          this.status_title=Status[status];
          this.label=StatusLabel[`${this.status_title}`];
          console.log(`${this.status_title} label ${this.label}`);
          const tasksListComponent = new TasksListComponent({task_status:{status_title:this.status_title,label:this.label}});
          console.log(`happier now: ${tasksListComponent.status}`);
          render(tasksListComponent, this.tasksBoardComponent.getElement());
          
          for (let j = 0; j < this.boardTasks.length; j++) {
              const taskComponent = new TaskComponent({task:this.boardTasks[j]});
              if (this.boardTasks[j].status==this.status_title) {
                render(taskComponent, tasksListComponent.getElement());
              }
              
          }
   }
   const cleanupComponent= new CleanUpButtonComponent();
   render(cleanupComponent, this.tasksBoardComponent.getElement());
 
 }
}