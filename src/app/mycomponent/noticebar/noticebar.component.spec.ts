import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticebarComponent } from './noticebar.component';

describe('NoticebarComponent', () => {
  let component: NoticebarComponent;
  let fixture: ComponentFixture<NoticebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
