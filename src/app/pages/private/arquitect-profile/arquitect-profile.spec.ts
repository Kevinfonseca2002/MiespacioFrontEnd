import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitectProfile } from './arquitect-profile';

describe('ArquitectProfile', () => {
  let component: ArquitectProfile;
  let fixture: ComponentFixture<ArquitectProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArquitectProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquitectProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
