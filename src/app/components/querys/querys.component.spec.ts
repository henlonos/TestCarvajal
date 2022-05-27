import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerysComponent } from './querys.component';

describe('QuerysComponent', () => {
  let component: QuerysComponent;
  let fixture: ComponentFixture<QuerysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
