import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetChatComponent } from './meet-chat.component';

describe('MeetChatComponent', () => {
  let component: MeetChatComponent;
  let fixture: ComponentFixture<MeetChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
