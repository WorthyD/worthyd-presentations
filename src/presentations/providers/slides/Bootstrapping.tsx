import { Slide } from '../../../components/Slide';

import { TSX } from '../../../components/SyntaxHighlight';

const moduleProviding = `
  @NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
    ],
    providers: [MyOwnService],
    bootstrap: [AppComponent],
  })
  export class AppModule {}

  //main.ts
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { AppModule } from './app/app.module';

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));




`;
const standAloneComponentProviding = `
@Component({
    selector: 'app-my-test-component',
    standalone: true,
    imports: [CommonModule],
    providers: [MyTestDataService],
    templateUrl: './my-test-component.component.html',
    styleUrl: './my-test-component.component.css',
  })
  export class MyTestComponentComponent {
    constructor(private myTestDataService: MyTestDataService) {}
  }
`;

const httpClientModule = `
  @NgModule({
    declarations: [AppComponent],
    imports: [
      HttpClientModule, // Marked as deprecated in Angular 18
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiKeyInterceptor,
        multi: true
      }
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
`;

const httpClientStandalone = `
  //apps/standalone-app/src/app/app.config.ts
  import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(appRoutes),
  
      // Providing HTTP Client
      provideHttpClient(
        // Must be HttpInterceptorFn
        withInterceptors([ApiKeyInterceptor]),
      ),

    ],
  };
  
`;

const standAloneAppProviding = `
  //apps/standalone-app/src/app/app.config.ts
  import { HttpClientModule, provideHttpClient } from '@angular/common/http';
  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(appRoutes),
  
      // Providing HTTP Client
      provideHttpClient(),

      // HttpClientModule deprecated in NG18
      importProvidersFrom(HttpClientModule),
    ],
  };


  /// main.ts
  import { bootstrapApplication } from '@angular/platform-browser';
  import { appConfig } from './app/app.config';
  import { AppComponent } from './app/app.component';

  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
`;
const httpInterceptors = `
  //apps/standalone-app/src/app/app.config.ts
  import { withInterceptors, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
  export const appConfig: ApplicationConfig = {
    providers: [

      provideHttpClient(
        withInterceptors([ApiKeyInterceptor])
      )
      // or 
      // noted may be phased out.
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ApiKeyInterceptorClass, // Class based interceptor
        multi: true
      },
      provideHttpClient(withInterceptorsFromDi())
    ],
  };
`;

const libProvide = `
    import { Provider } from '@angular/core';
    import { HeaderService } from './header.service';
    import { Header } from './header.class'; // Abstract Class

    export const provideHeader: () => Provider[] = () => [
        HeaderService,
        { provide: Header, useExisting: HeaderService }
    ]

`;

export const Bootstrapping = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/providers/${name}`, import.meta.url).href;
  }
  return (
    <>
      <Slide>
        <h2>Bootstrapping</h2>
      </Slide>
      <Slide>
        <h2>Module Providing</h2>
        <TSX code={moduleProviding} />
      </Slide>
      <Slide>
        <h2>Standalone App Providing</h2>
        <TSX code={standAloneAppProviding} />
      </Slide>

      <Slide>
        <h2>HttpClientModule w/ Interceptors</h2>
        <TSX code={httpClientModule} />
      </Slide>
      <Slide>
        <h2>HttpClientModule w/ Interceptors</h2>
        <TSX code={httpClientStandalone} />
      </Slide>

      <Slide>
        <h2>Provide a Provider</h2>
        <TSX code={libProvide} />
      </Slide>

      <Slide>
        <h2>Demo</h2>
      </Slide>
    </>
  );
};
