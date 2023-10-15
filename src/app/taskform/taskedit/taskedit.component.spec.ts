import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskeditComponent } from './taskedit.component';

describe('TaskeditComponent', () => {
  let component: TaskeditComponent;
  let fixture: ComponentFixture<TaskeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskeditComponent]
    });
    fixture = TestBed.createComponent(TaskeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
