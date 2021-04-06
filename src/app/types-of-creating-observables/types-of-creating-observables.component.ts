import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types-of-creating-observables',
  templateUrl: './types-of-creating-observables.component.html',
  styleUrls: ['./types-of-creating-observables.component.css']
})
export class TypesOfCreatingObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addItem(value: any) {
    const newNode = document.createElement('li');
    const textNode = document.createTextNode(value);
    newNode.appendChild(textNode);
    document.getElementById('output').appendChild(newNode);
  }
}
