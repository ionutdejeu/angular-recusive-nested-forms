import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTreeViewComponent } from './example-tree-view.component';

describe('ExampleTreeViewComponent', () => {
  let component: ExampleTreeViewComponent;
  let fixture: ComponentFixture<ExampleTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleTreeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
