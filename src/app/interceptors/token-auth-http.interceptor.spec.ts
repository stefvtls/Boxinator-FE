import { TestBed } from '@angular/core/testing';

import { TokenAuthHttpInterceptor } from './token-auth-http.interceptor';

describe('TokenAuthHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenAuthHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenAuthHttpInterceptor = TestBed.inject(TokenAuthHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
