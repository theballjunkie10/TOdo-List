import HeaderComponent from './view/header-component.js';
import {render, RenderPosition} from './framework/render.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskListComponent from './view/task-list-component.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const taskListContainer = document.querySelector('.taskboard');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
// render(new TaskBoardComponent(), taskListContainer);
var i=0
while (i<4) {
    render(new TaskListComponent(), taskListContainer,RenderPosition.AFTERBEGIN); 
    i+=1;
}