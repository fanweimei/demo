import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import Draggabilly from 'draggabilly';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less']
})
export class PanelComponent implements OnInit, AfterViewInit, OnChanges {
  id = Date.now().toString(36);
  element;
  isAnimating = false;
  pHeight: number = 0;
  @Input() height;
  @Input() width;
  @Input() x;
  @Input() y;
  @Input() pTitle;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.height.currentValue) {
      this.pHeight = changes.height.currentValue;
    }
  }

  ngAfterViewInit() {
    this.element = document.getElementById('box_' + this.id);
    var draggie = new Draggabilly(this.element, {
      containment: '.drag-container',
      handle: '.title'
    });
  }

  OnClose(e) {
    e.stopPropagation();
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;
    const remove = () => {
      this.pHeight -= 16;
      if (this.pHeight <= 0) {
        this.element.remove();
        this.isAnimating = false;
        return;
      }
      requestAnimationFrame(remove);
    }
    requestAnimationFrame(remove);
  }
}
