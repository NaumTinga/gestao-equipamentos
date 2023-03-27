import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquisicaoShowComponent } from './aquisicao.show.component';

describe('AquisicaoShowComponent', () => {
  let component: AquisicaoShowComponent;
  let fixture: ComponentFixture<AquisicaoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquisicaoShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquisicaoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
