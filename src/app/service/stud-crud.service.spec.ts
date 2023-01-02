import { TestBed } from '@angular/core/testing';

import { StudCrudService } from './stud-crud.service';

describe('StudCrudService', () => {
  let service: StudCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
