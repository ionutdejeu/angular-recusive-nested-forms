import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ExampleTreeViewComponent } from './example-tree-view/example-tree-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionContainerComponent } from './question-container/question-container.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { TreeQuestionComponent } from './tree-question/tree-question.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    ExampleTreeViewComponent,
    QuestionContainerComponent,
    SingleQuestionComponent,
    TreeQuestionComponent
  ],
  imports: [CommonModule, RouterModule, BrowserModule, FormsModule, ReactiveFormsModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
