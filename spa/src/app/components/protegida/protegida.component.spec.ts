import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegidaComponent } from './protegida.component';

describe('ProtegidaComponent', () => {
  let component: ProtegidaComponent;
  let fixture: ComponentFixture<ProtegidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtegidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtegidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
