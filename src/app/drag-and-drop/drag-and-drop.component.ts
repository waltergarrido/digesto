import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {
  items = [];

  drop(event: CdkDragDrop<string[]>) {
    const item = event.item.data; // Accede al valor de 'item' aquí
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
 
  
  
  
  
  
}
