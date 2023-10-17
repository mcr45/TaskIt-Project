import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanlistComponent } from './kanbanlist.component';

describe('KanbanlistComponent', () => {
  let component: KanbanlistComponent;
  let fixture: ComponentFixture<KanbanlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbanlistComponent]
    });
    fixture = TestBed.createComponent(KanbanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
