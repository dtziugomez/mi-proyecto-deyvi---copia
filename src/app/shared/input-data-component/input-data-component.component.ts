import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-data-component',
  templateUrl: './input-data-component.component.html',
  styleUrls: ['./input-data-component.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputDataComponent implements OnInit {

  @Input() ph?: string; //placeholder
  @Output() inputData = new EventEmitter<string>();
  @Input() typeInput?: string;
  @Input() val: any;
  timeout: any = null;

  ngOnInit(): void {
  }

  captureValue(event: any): void {//devolver valor al componente padre
    clearTimeout(this.timeout);
    const $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.val = event.target.value;
        $this.updateValue();
      }
    }, 1000)
  }

  updateValue(): void { //devolver valor del input
    this.inputData.emit(this.val);
  }
}
