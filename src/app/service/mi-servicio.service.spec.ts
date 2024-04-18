import { TestBed } from '@angular/core/testing';

import { MiServicioService } from './mi-servicio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MiServicioService', () => {
  let service: MiServicioService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MiServicioService]
    }).compileComponents();

    service = TestBed.inject(MiServicioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
