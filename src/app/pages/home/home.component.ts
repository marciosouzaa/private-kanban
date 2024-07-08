import { Component, NgModule, OnInit } from '@angular/core';
import { CardComponent } from '../../core/components/card/card.component';
import {CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, DragDropModule, CdkDropList, CdkDrag, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  backlog = ['work' ];
  analise = ['work' ];
  desenvolvimento = ['work' ];
  teste = ['work' ];
  feito = ['work' ];

  novoCard:string = '';
  ngOnInit() {
    if(localStorage.getItem('pk.backlog')){
       var getBacklog:any = localStorage.getItem('pk.backlog');
       this.backlog = JSON.parse(getBacklog);
    };
    if(localStorage.getItem('pk.analise')){
      var getAnalise:any = localStorage.getItem('pk.analise');
      this.analise = JSON.parse(getAnalise);
    };
    if(localStorage.getItem('pk.desenvolvimento')){
      var getDesenvolvimento:any = localStorage.getItem('pk.desenvolvimento');
      this.desenvolvimento = JSON.parse(getDesenvolvimento);
    };
    if(localStorage.getItem('pk.teste')){
      var getTeste:any = localStorage.getItem('pk.teste');
      this.teste = JSON.parse(getTeste);
    };
    if(localStorage.getItem('pk.feito')){
      var getFeito:any = localStorage.getItem('pk.feito');
      this.feito = JSON.parse(getFeito);
    };
  };

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    };
    setTimeout(() => {
      localStorage.setItem('pk.backlog',JSON.stringify(this.backlog));
      localStorage.setItem('pk.analise',JSON.stringify(this.analise));
      localStorage.setItem('pk.desenvolvimento',JSON.stringify(this.desenvolvimento));
      localStorage.setItem('pk.teste',JSON.stringify(this.teste));
      localStorage.setItem('pk.feito',JSON.stringify(this.feito));
    }, 0);

  };

  addBacklog(){
    if(this.novoCard.length > 0){
      this.backlog.push(this.novoCard)
      this.novoCard = '';
    };
  };

  handleKey(e:any){
    if(e.key === 'Enter'){
      this.addBacklog();
    };
  };

  deleteItem(item:any, e:any){
    var itemFind = this.backlog.find(i => i == item);
    if(itemFind)
      this.backlog = this.backlog.filter(i => i != item);
    else{
      itemFind = this.analise.find(i => i == item);
      if(itemFind)
        this.analise = this.analise.filter(i => i != item);
      else{
        itemFind = this.desenvolvimento.find(i => i == item);
        if(itemFind)
          this.desenvolvimento = this.desenvolvimento.filter(i => i != item);
        else{
          itemFind = this.teste.find(i => i == item);
          if(itemFind)
            this.teste = this.teste.filter(i => i != item);
          else{
            itemFind = this.feito.find(i => i == item);
            if(itemFind)
              this.feito = this.feito.filter(i => i != item);
          };
        };
      };
    };
  };
};

