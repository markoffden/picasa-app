import { TestBed, inject } from '@angular/core/testing';

import { PicasaService } from './picasa.service';

describe('PicasaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicasaService]
    });
  });

  it('should ...', inject([PicasaService], (service: PicasaService) => {
    expect(service).toBeTruthy();
  }));
});
