import { TestBed } from '@angular/core/testing';

import { TokenRefreshHttpInterceptor } from './token-refresh-http.interceptor';

describe('TokenRefreshHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenRefreshHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenRefreshHttpInterceptor = TestBed.inject(TokenRefreshHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
