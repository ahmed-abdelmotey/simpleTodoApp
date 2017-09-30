import { TestBed, inject } from '@angular/core/testing';

import { TodosListsService } from './todos-lists.service';

describe('TodosListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosListsService]
    });
  });

  it('should be created', inject([TodosListsService], (service: TodosListsService) => {
    expect(service).toBeTruthy();
  }));
});
