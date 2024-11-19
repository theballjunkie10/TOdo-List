import {createElement} from '../framework/render.js';


function createTaskBoardComponentTemplate() {
    return (
        
        `
        <ul id="backlog">
                <div id="backlog_title">Бэклог</div>
                <li>Выучить JS</li>
                <li>Выучить React</li>
                <li>Сделать домашку</li>
        </ul>
        <ul id="process">
                <div id="process_title">В процессе</div>
                <li>Выпить смузи</li>
                <li>Попыть воды</li>
            </ul>
            <ul id="ready">
                <div id="ready_title">Готово</div>
                <li>Позвонить маме</li>
                <li>Погадить кота</li>
            </ul>
                
            <ul id="basket">
                <div id="basket_title">Корзина</div>
                <li>Сходить погулять</li>
                <li>Прочитать Войну и Мир</li>
                <button id="clear_button" type="submit">X Очистить</button>
            </ul>`
      );
}


export default class TaskBoardComponent {
  getTemplate() {
    return createTaskBoardComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    console.log(this.element)
    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}