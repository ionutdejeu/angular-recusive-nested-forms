import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TreeQuestionModel } from '../tree-view/tree-mock';
@Component({
  selector: 'app-tree-question',
  templateUrl: './tree-question.component.html',
  styleUrl: './tree-question.component.css'
})
export class TreeQuestionComponent {
  @Input() question?: TreeQuestionModel;
  @Output() valueChanged = new EventEmitter<boolean>();

  invalidBorder = 'solid 2px var(--red)';
  validBorder = 'solid 2px var(--light-blue-background)';
  textInput = '';

  ngOnChanges(): void {
    if (this.question?.inputType === 'text') {
      this.textInput = this.question?.value?.toString() ?? '';
    }
  }

  onValueChange(): void {
    this.valueChanged.emit();
  }

  onTextChange(event: Event): void {
    if (this.question) {
      this.question.value = event as unknown as string;
      this.question.required = this.question.value.trim() === '';
      this.valueChanged.emit(false);
    }
  }
}
