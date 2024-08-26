import { Slide } from '../../../components/Slide';

import { TSX } from '../../../components/SyntaxHighlight';
import { Note } from '../../../components/Notes';
import { Mermaid } from '../../../components/Mermaid';

const stuff = `
  // my-test-component.component.ts
  @Component({
    selector: 'app-my-test-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './my-test-component.component.html',
    styleUrl: './my-test-component.component.css',
  })
  export class MyTestComponentComponent {
    constructor(private myTestDataService: MyTestDataService) {}
  }

  // my-test-data.service.ts
  @Injectable()
  export class MyTestDataService {
    counter = 0;
    increment() {
      this.counter++;
    }
  }

`;

const provideInRoot = `
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })
  export class MyTestDataService {
    counter = 0;
    increment() {
      this.counter++;
    }
  }
`;

const provideInModule = `
  import { MyTestDataService } from './my-test-data.service';

  @NgModule({
    providers: [MyTestDataService],
  })
  export class AppModule {}
`;

const provideInComponent = `
  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { MyTestDataService } from '../my-test-data.service';

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
    get count() {
      return this.myTestDataService.counter;
    }
    addToCounter() {
      this.myTestDataService.increment();
    }
  }

`;

const provideInRoute = `
  const routes: Routes = [
    {
      path: 'user',
      component: UserComponent,
      providers: [UserService]
    },
  ];
`;

export const ProvideIn = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/providers/${name}`, import.meta.url).href;
  }
  return (
    <>
      <Slide>
        <h2>Let's Use A Service</h2>
        <TSX code={stuff} />
      </Slide>
      <Slide>
        <h2>The Error</h2>
        <img src={getImageUrl('no-provider.png')} />
        <Note>Saw this a lot in early angular</Note>
      </Slide>
      <Slide>
        <h2>What's causing this and how can we fix it?</h2>
        <h3>The compiler knows where the code lives.</h3>
        <h3 className="fragment">Angular needs to know how to serve up the service.</h3>
        <Note>
          The service needs to be setup to be injected into so that Angular knows to serve it up
          <br />
          Angular needs to know what scope this belongs to.
        </Note>
      </Slide>
      <Slide>
        <h2>Ways to Provide a Block of Code</h2>
        <ul>
          <li className="fragment">Provide in Root</li>
          <li className="fragment">Provide in Component</li>
          <li className="fragment">Provide in Module</li>
          <li className="fragment">Provide in Application Config (Standalone)</li>
          <li className="fragment">Provide in Route</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Provide In Root</h2>

        <div className="two-col small-text">
          <div>
            <TSX code={provideInRoot} />
          </div>
          <div>
            <ul className="">
              <li className="fragment">Introduced in Angular 6</li>
              <li className="fragment">Out of the box w/ CLI</li>
              <li className="fragment">Tree Shakeable</li>
              <li className="fragment">Can be referenced everywhere it is imported</li>
              <li className="fragment">Globally scoped</li>
            </ul>
          </div>
        </div>
      </Slide>
      <Slide>
        <h2>Provide In Root</h2>
        <Mermaid
          chart={`
         stateDiagram-v2
         Application -->  Root_Scope
          Root_Scope: Root Scope
         state Root_Scope {
            
             [*] --> Component_1
             [*] --> Component_2
             [*] --> Component_3
             
             Component_1: Component 1
             Component_2: Component 2
             Component_3: Component 3
         }
 
     
        `}
        ></Mermaid>
      </Slide>

      <Slide>
        <h2>Provide In Component</h2>
        <TSX code={provideInComponent} />
        {/* <ul>
          <li className="fragment">
            Isolated to the component & child components
          </li>
        </ul> */}
      </Slide>
      <Slide>
        <h2>Provide In Module</h2>
        <TSX code={provideInModule} />
      </Slide>
      <Slide>
        <h2>Provide In Component/Module</h2>
        <Mermaid
          chart={`
         stateDiagram-v2
         state Application {
             Component_1: Provide Component
             Module: Provide Module
     
             state Component_1 {
                 [*] --> Child1
     
                 Child1: Child Components
             }
     
             state Module {
                 [*] --> Child2
                 [*] --> Child3
                 Child2: Child Component
                 Child3: Child Module
     
                 state Child3 {
                     [*] --> Child4
                     [*] --> Child5
     
                     Child4: Child Component
                     Child5: Child Component
                 }
             }
         }
        `}
        ></Mermaid>
      </Slide>
      <Slide>
        <h2>Provide in Route</h2>
        <div className="two-col small-text">
          <div>
            <TSX code={provideInRoute} />
          </div>
          <div>
            <ul>
              <li className="fragment">Introduced in Angular 14</li>
              <li className="fragment">Serves as a group module replacement</li>
              <li className="fragment">Learned about during the Speed Run</li>
            </ul>
          </div>
        </div>
      </Slide>
      <Slide>
        <Mermaid
          chart={`
         flowchart BT
 
   subgraph Environment Injectors
    direction BT
    D[Router Injector]
    D --> E[Root Injector] 
    E ---> F[Platform Injectors]
    end
    subgraph Element Providers 
    direction BT
    A[Grandchild component]
    A --> B[Parent Component] 
    B ---> C[App Root]
    C -.-> A
    end
    A --> D
     
        `}
        ></Mermaid>
      </Slide>
      <Slide>
        <h2>Bonus Reading: Resolution Modifiers</h2>
        <ul>
          <li>
            <a href="https://angular.dev/guide/di/hierarchical-dependency-injection#optional" target="_blank">
              @Optional()
            </a>
          </li>
          <li>
            <a href="https://angular.dev/guide/di/hierarchical-dependency-injection#self" target="_blank">
              @Self()
            </a>
          </li>
          <li>
            <a href="https://angular.dev/guide/di/hierarchical-dependency-injection#skipself" target="_blank">
              @SkipSelf()
            </a>
          </li>
          <li>
            <a href="https://angular.dev/guide/di/hierarchical-dependency-injection#host" target="_blank">
              @Host()
            </a>
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2>Bonus Reading Examples</h2>
        <TSX
          code={`
  @Component({
    selector: 'app-self-no-data',
    templateUrl: './self-no-data.component.html',
    styleUrls: ['./self-no-data.component.css']
  })
  export class SelfNoDataComponent {
    constructor(@Self() @Optional() public leaf?: LeafService) { }
  }   
          `}
        />
      </Slide>
      <Slide>
        <h2>
          <a href="https://github.com/WorthyD/worthyd-sandbox/tree/main/apps/worthyd-module" target="_blank">
            Demo
          </a>
        </h2>
      </Slide>
    </>
  );
};
