import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresssqlComponent } from './postgresssql.component';

describe('PostgresssqlComponent', () => {
  let component: PostgresssqlComponent;
  let fixture: ComponentFixture<PostgresssqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostgresssqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostgresssqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
