import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanitemComponent } from './kanbanitem.component';

describe('KanbanitemComponent', () => {
  let component: KanbanitemComponent;
  let fixture: ComponentFixture<KanbanitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanitemComponent]
    });
    fixture = TestBed.createComponent(KanbanitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
