import { Slide } from '../../../components/Slide';

import { TSX } from '../../../components/SyntaxHighlight';

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
              provide: MyTestDataService,  //<-- implements MyTestDataServiceInterface
              useClass: MyTestDataMockService //<-- implements MyTestDataServiceInterface
          }
      ],
  })
  export class AppModule {}

`;
const useExisting = `
  @NgModule({
      providers: [
        MyTestDataService,
          {
              provide: MyTestDataMockService,  
              useExisting: MyTestDataService 
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
const useFactoryExample = `
  @NgModule({
      imports: [HttpClientModule]
      providers: [
          {
              provide: MyTestDataService,
              useFactory: 
                (HttpClient, baseUrl) => new  MyTestDataService(HttpClient, baseUrl),
              deps:[HttpClient, 'https://jsonplaceholder.typicode.com/']
          }
      ],
  })
  export class AppModule {}
`;


export const DependencyInjection = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/providers/${name}`, import.meta.url).href;
  }
  return (
    <Slide>
      <Slide>
        <h2>Dependency Injection Providers</h2>
        <ul>
          <li className="fragment">
            <a
              href="https://angular.dev/guide/di/dependency-injection-providers#using-an-injectiontoken-object"
              target="_blank"
            >
              useValue
            </a>
          </li>
          <li className="fragment">
            <a
              href="https://angular.dev/guide/di/dependency-injection-providers#class-providers-useclass"
              target="_blank"
            >
              useClass
            </a>
          </li>
          <li className="fragment">
            <a
              href="https://angular.dev/guide/di/dependency-injection-providers#alias-providers-useexisting"
              target="_blank"
            >
              useExisting
            </a>
          </li>
          <li className="fragment">
            <a
              href="https://angular.dev/guide/di/dependency-injection-providers#factory-providers-usefactory"
              target="_blank"
            >
              useFactory
            </a>
          </li>
        </ul>
      </Slide>

      <Slide>
        <h2>Simple Service</h2>
        <TSX code={baseService} />
      </Slide>
      <Slide>
        <TSX code={baseDesiredService} />
      </Slide>
      <Slide>
        <TSX code={tokenDeclaration} />
      </Slide>

      <Slide>
        <TSX code={tokenUsage} />
      </Slide>

      <Slide>
        <h2>useClass</h2>
        <TSX code={useClass} />
      </Slide>

      <Slide>
        <h2>useExisting</h2>
        <TSX code={useExisting} />
      </Slide>
      <Slide>
        <h2>useFactory</h2>
        <TSX code={useFactory} />
      </Slide>
      <Slide>
        <h2>useFactory</h2>
        <TSX code={useFactoryExample} />
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
        <h2>Demo</h2>
      </Slide>
    </Slide>
  );
};
