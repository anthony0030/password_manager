import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    content: String
  }

  connect(){
    console.log("clipboard#connected", this.contentValue)

    this.originalContent = this.element.innerHTML;
  }

  copy() {
    navigator.clipboard
    .writeText(this.contentValue)
    .then(this.onCopy.bind(this), this.onError.bind(this))
  }

  onCopy(){
    this.setContent(`<i class="fa-solid fa-check"></i>`);

    this.resetConent();
  }

  onError(){
    this.setContent(`<i class="fa-solid fa-xmark"></i>`);

    this.resetConent();
  }

  setContent(content){
    this.element.closest("button").innerHTML = content;
  }

  resetConent(delay = 2500) {
    this.timout = setTimeout(() => {
      this.element.innerHTML = this.originalContent;
    }, delay);
  }

  disconnect(){
    console.log("clipboard#disconnect", this.contentValue)

    if(this.timout){
      clearTimeout(this.timout);
    }
  }
}
