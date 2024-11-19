import {createElement} from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

function createCleanUpButton(){
    return (`
        <button id="clear_button" type="submit">X Очистить</button>
        `);
}

export default class CleanUpButtonComponent extends AbstractComponent{
    #handleClick=null;

  #clickHandler=(evt)=>{
    evt.preventDefault();
    this.#handleClick();
  }

  constructor({onClick}){
    super();
    console.log("Feels gooood")
    this.#handleClick=onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }
    get template(){
        return createCleanUpButton();
    }
    
   
    // get element(){
    //     if(!this.element){
    //         this.element=createElement(this.getTemplate());
    //     }
    //     return this.element;
    // }
    removeElement(){
        this.element=null;
    }
}