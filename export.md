# Project Structure

```
.angular/
  cache/
    18.2.20/
      cookies-ssr/
        vite/
          deps/
            _metadata.json
            @angular_common_http.js
            @angular_common_http.js.map
            @angular_common.js
            @angular_common.js.map
            @angular_core.js
            @angular_core.js.map
            @angular_forms.js
            @angular_forms.js.map
            @angular_platform-browser.js
            @angular_platform-browser.js.map
            @angular_router.js
            @angular_router.js.map
            chunk-2L37XUMS.js
            chunk-2L37XUMS.js.map
            chunk-6Q4RANH6.js
            chunk-6Q4RANH6.js.map
            chunk-CXCX2JKZ.js
            chunk-CXCX2JKZ.js.map
            chunk-FFZIAYYX.js
            chunk-FFZIAYYX.js.map
            chunk-IGF3QYBZ.js
            chunk-IGF3QYBZ.js.map
            chunk-U5YBWPXX.js
            chunk-U5YBWPXX.js.map
            chunk-UND7GNPC.js
            chunk-UND7GNPC.js.map
            package.json
            rxjs_operators.js
            rxjs_operators.js.map
            rxjs.js
            rxjs.js.map
          deps_ssr/
            _metadata.json
            @angular_common_http.js
            @angular_common_http.js.map
            @angular_common.js
            @angular_common.js.map
            @angular_core.js
            @angular_core.js.map
            @angular_forms.js
            @angular_forms.js.map
            @angular_platform-browser.js
            @angular_platform-browser.js.map
            @angular_platform-server.js
            @angular_platform-server.js.map
            @angular_router.js
            @angular_router.js.map
            chunk-7ARQESE3.js
            chunk-7ARQESE3.js.map
            chunk-BGEZPR2X.js
            chunk-BGEZPR2X.js.map
            chunk-FWX7UIPA.js
            chunk-FWX7UIPA.js.map
            chunk-H5LFL6TM.js
            chunk-H5LFL6TM.js.map
            chunk-IT3GT3QQ.js
            chunk-IT3GT3QQ.js.map
            chunk-NAEIJZ4P.js
            chunk-NAEIJZ4P.js.map
            chunk-NQ4HTGF6.js
            chunk-NQ4HTGF6.js.map
            chunk-T5SIKDG3.js
            chunk-T5SIKDG3.js.map
            package.json
            rxjs_operators.js
            rxjs_operators.js.map
            rxjs.js
            rxjs.js.map
            xhr2-ISERFGGE.js
            xhr2-ISERFGGE.js.map
        .tsbuildinfo
        angular-compiler.db
        angular-compiler.db-lock
public/
  favicon.ico
src/
  app/
    core/
      tokens/
        request.token.ts
    environments/
      environment.ts
    models/
      login.model.ts
    pages/
      home/
        home.component.css
        home.component.html
        home.component.spec.ts
        home.component.ts
      login/
        login.component.css
        login.component.html
        login.component.ts
    services/
      ApiServices.ts
      auth.interceptor.ts
      AuthServices.ts
      CookieAdmin.ts
      StateServices.ts
    app.component.css
    app.component.html
    app.component.spec.ts
    app.component.ts
    app.config.server.ts
    app.config.ts
    app.routes.ts
  index.html
  main.server.ts
  main.ts
  styles.css
.editorconfig
.gitignore
angular.json
package-lock.json
package.json
README.md
server.ts
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```



# Selected Files Content

## src/app/core/tokens/request.token.ts

```ts
import { InjectionToken } from '@angular/core';
import { Request, Response } from 'express';

export const REQUEST = new InjectionToken<Request>('Express request object');
export const RESPONSE = new InjectionToken<Response>('Express response object');
```

## src/app/environments/environment.ts

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api'
};
```

## src/app/models/login.model.ts

```ts
export interface LoginCredentials {
  company: string;
  email: string;
  password: string;
}
```

## src/app/pages/home/home.component.css

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #333;
}

p {
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

p.success {
  background-color: #e6f7e8;
  color: #2e7d32;
  border-color: #66bb6a;
}

p.error {
  background-color: #ffebee;
  color: #c62828;
  border-color: #ef5350;
}
```

## src/app/pages/home/home.component.html

```html
<div class="container">
  <h1>Estado de Autenticación</h1>
  <p *ngIf="isLoggedIn$ | async">
    ✅ ¡Estás autenticado! El servidor te ha reconocido.
  </p>
  <p *ngIf="!(isLoggedIn$ | async)">
    ❌ No estás autenticado.
  </p>
</div>
```

## src/app/pages/home/home.component.spec.ts

```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## src/app/pages/home/home.component.ts

```ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/StateServices';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private stateService = inject(StateService);
  public isLoggedIn$: Observable<boolean> = this.stateService.isLoggedIn$;
}
```

## src/app/pages/login/login.component.css

```css

```

## src/app/pages/login/login.component.html

```html
<div class="login-container">
  <h2>Iniciar Sesión</h2>
  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label for="company">Compañía</label>
      <input type="text" id="company" formControlName="company">
      @if (loginForm.get('company')?.invalid && loginForm.get('company')?.touched) {
        <small class="error-message">La compañía es requerida.</small>
      }
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email">
      @if (loginForm.get('email')?.invalid && loginForm.get('email')?.touched) {
        <small class="error-message">
          @if (loginForm.get('email')?.errors?.['required']) {
            El email es requerido.
          }
          @if (loginForm.get('email')?.errors?.['email']) {
            El formato del email no es válido.
          }
        </small>
      }
    </div>

    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" id="password" formControlName="password">
      @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched) {
        <small class="error-message">La contraseña es requerida.</small>
      }
    </div>

    <button type="submit" [disabled]="loginForm.invalid">Login</button>
  </form>
</div>
```

## src/app/pages/login/login.component.ts

```ts
// src/app/components/login/login.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/AuthServices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Inyección de dependencias
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Creación del formulario con FormGroup y FormControls
  // Definimos la estructura del formulario y sus validaciones aquí
  loginForm: FormGroup = this.fb.group({
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { company, email, password } = this.loginForm.value;
      // Llama al servicio de autenticación
      this.authService.login({ company, email, password }).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      });
    } else {
      console.error('Formulario no válido');
      // Puedes añadir lógica para mostrar mensajes de error al usuario
    }
  }
}
```

## src/app/services/ApiServices.ts

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProtectedData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/protected-route`);
  }
}
```

## src/app/services/auth.interceptor.ts

```ts
// ✅ Código: src/app/services/auth.interceptor.ts

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieAdminService } from './CookieAdmin';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieAdminService = inject(CookieAdminService);
  const authToken = cookieAdminService.get('auth-token');

  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
```

## src/app/services/AuthServices.ts

```ts
// src/app/services/AuthService.ts

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoginCredentials } from '../models/login.model';
import { environment } from '../environments/environment';
import { StateService } from './StateServices';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private stateService = inject(StateService);

  constructor() { }

  login(credentials: LoginCredentials) {
    return this.http.post(`${environment.apiBaseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Asumimos que la respuesta contiene el token
        const token = response.token;

        if (typeof document !== 'undefined') {
          document.cookie = `auth-token=${token}; path=/`;
        }

        // ✅ Notificamos al StateService que el usuario ha iniciado sesión
        this.stateService.setLoggedInState(true);
      })
    );
  }
}
```

## src/app/services/CookieAdmin.ts

```ts
import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { REQUEST, RESPONSE } from '../core/tokens/request.token';
import { Request, Response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class CookieAdminService {
  private isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Optional() @Inject(REQUEST) private request: Request,
    @Optional() @Inject(RESPONSE) private response: Response
  ) {
    this.isServer = isPlatformServer(this.platformId);
    }

  public get(name: string): string | null {
    if (this.isServer) {
      if (!this.request || !this.request.headers.cookie) {
        return null;
      }
      const cookie = this.request.headers.cookie
        .split(';')
        .find((cookie: string) => cookie.trim().startsWith(`${name}=`));
      if (cookie) {
        return cookie.split('=')[1];
      }
      return null;
    } else {
      const cookie = document.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith(`${name}=`));
      if (cookie) {
        return cookie.split('=')[1];
      }
      return null;
    }
  }

  public set(name: string, value: string, days?: number): void {
    if (this.isServer) {
      // ✅ En el servidor, se usa el objeto de respuesta para establecer la cookie
      const cookie = `${name}=${value}`;
      this.response.setHeader('Set-Cookie', cookie);
    } else {
      // ✅ En el navegador, se usa la API del navegador
      let expires = '';
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
      }
      document.cookie = name + '=' + value + expires + '; path=/';
    }
  }

  public delete(name: string): void {
    this.set(name, '', -1);
  }
}
```

## src/app/services/StateServices.ts

```ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieAdminService } from './CookieAdmin';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor(private cookieAdminService: CookieAdminService) {
    const hasToken = !!this.cookieAdminService.get('auth-token');
    this._isLoggedIn.next(hasToken);
    console.log('🔐 Initial Auth State:', hasToken);
  }

  setLoggedInState(state: boolean): void {
    this._isLoggedIn.next(state);
  }
}
```

## src/app/app.component.css

```css

```

## src/app/app.component.html

```html
<router-outlet /><router-outlet />
```

## src/app/app.component.spec.ts

```ts
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'cookies-ssr' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('cookies-ssr');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, cookies-ssr');
  });
});
```

## src/app/app.component.ts

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cookies-ssr';
}
```

## src/app/app.config.server.ts

```ts
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
```

## src/app/app.config.ts

```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};
```

## src/app/app.routes.ts

```ts
// ✅ src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'home',
    component: HomeComponent
},
  
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},

    { path: 'login',
    component: LoginComponent
},
];
```

## src/index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CookiesSsr</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

## src/main.server.ts

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
```

## src/main.ts

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

## src/styles.css

```css
/* You can add global styles to this file, and also import other style files */
```

## server.ts

```ts
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import cookieParser from 'cookie-parser';
import { REQUEST, RESPONSE } from './src/app/core/tokens/request.token';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);
  server.use(cookieParser());

  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl },
          { provide: REQUEST, useValue: req },
          { provide: RESPONSE, useValue: res }
        ],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
```

## tsconfig.app.json

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": [
      "node"
    ]
  },
  "files": [
    "src/main.ts",
    "src/main.server.ts",
    "server.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}
```

## tsconfig.json

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```

