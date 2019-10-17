import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(TodoFormComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    component = new TodoFormComponent(new FormBuilder);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a form with controls',() => {
    expect(component.form.contains('name')).toBeTruthy();
  })
});
