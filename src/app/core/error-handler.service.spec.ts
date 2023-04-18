import { TestBed } from '@angular/core/testing';

import { Pepito } from './error-handler.service';

describe('ErrorHandlerService', () => {
  let service: Pepito;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pepito);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
