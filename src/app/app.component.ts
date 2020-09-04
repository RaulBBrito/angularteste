import { Component } from '@angular/core';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'soma-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'somaOrcamento';

  constructor(){

  }

  ngOnInit(){
  }
}
