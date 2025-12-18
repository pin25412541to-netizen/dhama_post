import { TestBed } from '@angular/core/testing';
import { ReadingPostService } from './reading-post';


describe('ReadingPost', () => {
  let service: ReadingPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
