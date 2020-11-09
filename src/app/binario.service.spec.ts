import { TestBed } from '@angular/core/testing';

import { BinarioService } from './binario.service';

describe('BinarioService', () => {
  let service: BinarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
