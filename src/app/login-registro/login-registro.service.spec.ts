import { TestBed } from '@angular/core/testing';

import { LoginUsuarioService } from './login-registro.service';

describe('LoginUsuarioService', () => {
  let service: LoginUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
