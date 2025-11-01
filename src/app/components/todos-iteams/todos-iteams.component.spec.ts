import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosIteamsComponent } from './todos-iteams.component';

describe('TodosIteamsComponent', () => {
  let component: TodosIteamsComponent;
  let fixture: ComponentFixture<TodosIteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosIteamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosIteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
