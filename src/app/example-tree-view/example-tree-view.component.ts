import { Component } from '@angular/core';
import { NODES } from '../tree-view/tree-mock';

@Component({
  selector: 'app-example-tree-view',
  templateUrl: './example-tree-view.component.html',
  styleUrl: './example-tree-view.component.css'
})
export class ExampleTreeViewComponent {
  tree = NODES;
  selectedNode : any;

  nodeSelected(event:any){
    this.selectedNode = event.name;
  }
}
