import { TestBed } from '@angular/core/testing';

import { IngredienteXRecetaService } from './ingrediente-xreceta.service';

describe('IngredienteXRecetaService', () => {
  let service: IngredienteXRecetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredienteXRecetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
