import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createTaskComponentTemplate(task) {
    const {title, status}=task;

    return (
        `
        <div class="${status}">
        <p class="task--view">${title}</p>
        </div>`
      );
}


export default class TaskComponent extends AbstractComponent{

  constructor({task}){
    super();
    this.task=task;
  }
  get template() {
    return createTaskComponentTemplate(this.task);
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