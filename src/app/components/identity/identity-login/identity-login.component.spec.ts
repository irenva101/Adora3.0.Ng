import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityLoginComponent } from './identity-login.component';

describe('IdentityLoginComponent', () => {
  let component: IdentityLoginComponent;
  let fixture: ComponentFixture<IdentityLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentityLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentityLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
