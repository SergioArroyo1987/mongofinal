import { TestBed } from '@angular/core/testing';

import { ProfesionalservicioService } from './profesionalservicio.service';

describe('ProfesionalservicioService', () => {
  let service: ProfesionalservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesionalservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
