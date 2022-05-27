import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterArticlesComponent } from './register-articles.component';

describe('RegisterArticlesComponent', () => {
  let component: RegisterArticlesComponent;
  let fixture: ComponentFixture<RegisterArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
