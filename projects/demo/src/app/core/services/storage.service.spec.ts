import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

fdescribe('StorageService', () => {
  let service: StorageService<number>;
  spyOn(localStorage, 'getItem').and.returnValue('[]');

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    spyOn(localStorage, 'getItem').and.returnValue('[1]');
    expect(service.getStorage()).toEqual([1]);
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
