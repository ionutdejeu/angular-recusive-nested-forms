import { Component } from '@angular/core';
import { FormQuestion } from '../single-question/question.model';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrl: './question-container.component.css'
})
export class QuestionContainerComponent {
  form: FormQuestion[] = [];
  isFormInvalid = true;
  localStorageKey = 'savedForm';

  constructor(private readonly http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    const savedForm = localStorage.getItem(this.localStorageKey);

    if (savedForm) {
      this.form = [];

      JSON.parse(savedForm).forEach((q: FormQuestion) => {
        this.form.push(new FormQuestion(q));
      });

      this.isFormInvalid = false;
    } else {
      await this.onReset();
    }
  }

  async getDefaultForm(): Promise<{questions: FormQuestion[]}> {
    const res = this.http.get<{ questions: FormQuestion[] }>('/assets/questions.json');
    return await lastValueFrom(res);
  }

  onValueChange(): void {
    let isInvalid = false;

    const checkQuestion = (question: FormQuestion) => {
      if (!question.hidden) {
        if (question.required) {
          isInvalid = question.required;
        }

        question.followUps?.forEach((followUp: FormQuestion) => {
          checkQuestion(followUp);
        });
      }
    }

    this.form.forEach((question: FormQuestion) => checkQuestion(question));
    this.isFormInvalid = isInvalid;
  }

  async onReset(): Promise<void>{
    await this.getDefaultForm().then((data: { questions: FormQuestion[]}) => {
      this.form = [];
      data.questions.forEach((q: FormQuestion) => {
        this.form.push(new FormQuestion(q));
      });
      this.isFormInvalid = true;
    });
  }

  onSave(): void {
    const formCopy = this.form.map((q: FormQuestion) => new FormQuestion(q));
    formCopy.forEach((q: FormQuestion) => q.clearFollowUps())
    localStorage.setItem(this.localStorageKey, JSON.stringify(formCopy));
  }
}
