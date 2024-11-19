import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskListComponent(status) {
  const {status_title, label}=status;
    return (
        `<article>
        <h3>${label}</h3>
        <div id="tasklist_${status_title}"></div>
        </article>`
      );
}


export default class TaskListComponent extends AbstractComponent{
  
  constructor({task_status}){
    super();
    this.status=task_status;
  }
  get template() {
    //console.log(`heat waves: ${this.status.status_title}`);
    return createTaskListComponent(this.status);
  }


  // get element() {
  //   if (!this.element) {
  //     this.element = createElement(this.getTemplate());
  //   }


  //   return this.element;
  // }


  removeElement() {
    this.element = null;
  }
}