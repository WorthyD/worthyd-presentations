import { Note } from '~/components/Notes';
import { Slide } from '../../../components/Slide';

import { TSX } from '../../../components/SyntaxHighlight';
import { UserContext } from '../../../layouts/LayoutDeck';
import { useContext } from 'react';

const baseService = `
    import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';
    import { Observable, delay } from 'rxjs';
    import { User } from '../models/my-test-data-model';

    @Injectable()
    export class MyTestDataService {
        constructor(private httpClient: HttpClient) {}

        getData():Observable<User[]> {
            return this.httpClient
            .get<User[]>('https://jsonplaceholder.typicode.com/users')
            .pipe(delay(1000));
        }
    }
`;
const baseDesiredService = `
    import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';
    import { Observable, delay } from 'rxjs';
    import { User } from '../models/my-test-data-model';

    @Injectable()
    export class MyTestDataService {
        constructor(private httpClient: HttpClient, private baseUrl:string) {}

        getData():Observable<User[]> {
            return this.httpClient
            .get<User[]>(this.baseUrl + '/users')
            .pipe(delay(1000));
        }
    }
`;
const useValueExample = `
 TestBed.configureTestingModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: MyTestDataService,
      useValue: {
        getData: jest.fn().mockReturnValue('abc123'),
        getSomeOtherValue: jest.fn().mockReturnValue({}),
      },
    },
  ],
  });

`;

const tokenDeclaration = `
    import { InjectionToken, ValueProvider } from '@angular/core';

    export const BASE_URL_TOKEN = new InjectionToken<string>('baseUrl');

    @NgModule({
        providers: [
            {
                provide: BASE_URL_TOKEN,
                useValue: 'https://jsonplaceholder.typicode.com/'
            }
        ],
    })
    export class AppModule {}
`;
const tokenUsage = `
    import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';
    import { Observable, delay } from 'rxjs';
    import { User } from '../models/my-test-data-model';
    import { BASE_URL_TOKEN } from './wherever.ts';

    @Injectable()
    export class MyTestDataService {
        constructor(
            private httpClient: HttpClient, 
            @Inject(BASE_URL_TOKEN) private baseUrl: string
        ) {}

        getData():Observable<User[]> {
            return this.httpClient
            .get<User[]>(this.baseUrl + '/users')
            .pipe(delay(1000));
        }
    }
`;

const useClass = `
  @NgModule({
      providers: [
          {
              provide: MyTestDataService,  
              useClass: MyTestDataMockService 
          }
      ],
  })
  export class AppModule {}

`;
const useExisting = `
  @NgModule({
      providers: [
        Security2Point0Service,
        {
            provide: SecurityService,  
            useExisting: Security2Point0Service 
        }
      ],
  })
  export class AppModule {}
`;

const useFactory = `
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, delay } from 'rxjs';
  import { User } from '../models/my-test-data-model';

  // @Injectable() <-- must remove for this example
  export class MyTestDataService {
      constructor(private httpClient: HttpClient, private baseUrl:string) {}

      getData():Observable<User[]> {
          return this.httpClient
          .get<User[]>(this.baseUrl + '/users')
          .pipe(delay(1000));
      }
  }
`;
const useFactoryExample = `
  @NgModule({
      imports: [HttpClientModule]
      providers: [
          {
              provide: MyTestDataService,
              useFactory: 
                (HttpClient, baseUrl) => new  MyTestDataService(HttpClient, baseUrl),
              deps:[HttpClient, environment.baseUrl]
          }
      ],
  })
  export class AppModule {}
`;
const useFactoryExample2 = `
  @NgModule({
      imports: [ConfigurationService]
      providers: [
        {
          provide: SecurityService,
          useFactory: (configurationService: ConfigurationService) => new SecurityService(
            {
              basePath: environment.apiUrl,
              orgId: configurationService.getOrgId()
            }
          ),
          deps: [ConfigurationService]
        },
      ],
  })
  export class AppModule {}
`;
const multi = `
  {
    provide: APP_INITIALIZER,
    useClass: configInitializer,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: apiKeyInterceptor,
    multi: true
  }
`;

const multiCode = `
  constructor(@Inject(DataStoreClasses) public storages: DataStoreClasses[]) {
    console.log('DATA_STORES_CLASSES', storages.length);
  }
`;

export const DependencyInjection = () => {
  return (
    <>
      <Slide>
        <h2>Dependency Injection Providers</h2>
        <ul>
          <li className="fragment">
            <a href="https://angular.dev/guide/di/dependency-injection-providers#using-an-injectiontoken-object" target="_blank">
              useValue
            </a>
          </li>
          <li className="fragment">
            <a href="https://angular.dev/guide/di/dependency-injection-providers#class-providers-useclass" target="_blank">
              useClass
            </a>
          </li>
          <li className="fragment">
            <a href="https://angular.dev/guide/di/dependency-injection-providers#alias-providers-useexisting" target="_blank">
              useExisting
            </a>
          </li>
          <li className="fragment">
            <a href="https://angular.dev/guide/di/dependency-injection-providers#factory-providers-usefactory" target="_blank">
              useFactory
            </a>
          </li>
        </ul>
        <Note>Ways to modify default provider behavior or provide code outside of angular's syntax</Note>
      </Slide>

      <Slide>
        <h2>Simple Service</h2>
        <TSX code={baseService} />
        <Note>Refactor to change the base URL</Note>
      </Slide>
      <Slide>
        <TSX code={baseDesiredService} />
        <Note>This is the desired result, but not possible</Note>
      </Slide>
      <Slide>
        <h2>useValue</h2>
        <TSX code={tokenDeclaration} />
        <Note>
          Token for non-class dependencies Must be static value <br /> Can't be an interface
          <br />
          Kind of like a key value pair,
        </Note>
      </Slide>

      <Slide>
        <TSX code={tokenUsage} />
      </Slide>

      <Slide>
        <TSX code={useValueExample} />
        <Note>See this a lot in unit tests, replacing a class with an object with essential functions</Note>
      </Slide>

      <Slide>
        <h2>useClass</h2>
        <TSX code={useClass} />
        <Note>
          Must be a class, can't be an interface <br />
          Will use standard DI for dependencies
        </Note>
      </Slide>

      <Slide>
        <h2>useExisting</h2>
        <TSX code={useExisting} />
        <Note>
          Use for hiding implementation <br />
          abstract class vs 1K line file
        </Note>
      </Slide>
      <Slide>
        <h2>Back to old code</h2>
        <TSX code={useFactory} />
        <Note>Treat like a vanilla JS class</Note>
      </Slide>
      <Slide>
        <h2>useFactory</h2>
        <TSX code={useFactoryExample} />
      </Slide>
      <Slide>
        <h2>useFactory</h2>
        <TSX code={useFactoryExample2} />
        <Note>Dependant on the result of other apis</Note>
      </Slide>

      {/* 
      <Slide>
        <h2>The Fix</h2>
        <ul>
          <li className="fragment">Provide in Root</li>
          <li className="fragment">Provide in Module</li>
          <li className="fragment">Provide in Component</li>
        </ul>
      </Slide> */}
      {/* <Slide>
        <h2>Provide In Root</h2>
        <TSX code={provideInRoot} />
      </Slide>
      <Slide>
        <h2>Provide In Root</h2>
        <img src={getImageUrl('provide-in-root.drawio.png')} />
      </Slide>
      <Slide>
        <h2>Provide In Module</h2>
        <TSX code={provideInModule} />
      </Slide>
      <Slide>
        <h2>Provide In Component</h2>
        <TSX code={provideInComponent} />
      </Slide>
      <Slide>
        <h2>Provide In Component/Module</h2>
        <img src={getImageUrl('provide-in-module-component.drawio.png')} />
      </Slide> */}

      <Slide>
        <h2>What about multi?</h2>
        <TSX code={multi} />
        <Note>
          Occasionally see this <br></br>
          We see for interceptors and initializers. Can also be used for validators
        </Note>
      </Slide>
      <Slide>
        <h2>Multi In code</h2>
        <TSX code={multiCode} />
      </Slide>

      <Slide>
        <a href="https://github.com/WorthyD/worthyd-sandbox/tree/main/apps/worthyd-standalone/src/app" target="_blank">
          Demo
        </a>
      </Slide>
    </>
  );
};
