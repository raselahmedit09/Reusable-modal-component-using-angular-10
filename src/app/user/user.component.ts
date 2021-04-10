import { Component, ViewChild,OnInit } from '@angular/core';
import {ModalComponent} from "../components/modal/modal.component";
import {ModalConfig} from "../components/modal/modal.config";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{

  @ViewChild('modal') private modal: ModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Modal Title",
    dismissButtonLabel: "Dismiss",
    closeButtonLabel: "Close",

    modalObject:{description: "Modal opened"},

    onDismiss: () => {
      this.toSave();
      return true
    },

    onClose: () => {
      return true
    },
    
    shouldDismiss: () => {
      return this.modalShouldDismiss();
    },
  }

constructor() {}
ngOnInit(): void {}

  async openModal() {
    return await this.modal.open()
  }

  async toSave (){
    console.log("save");
  }

  // validation before save any item. 
  async modalShouldDismiss (){
    return true;
  }



}
