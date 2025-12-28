import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ourjob } from './ourjob';

describe('Ourjob', () => {
  let component: Ourjob;
  let fixture: ComponentFixture<Ourjob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ourjob]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ourjob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
