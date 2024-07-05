import { Slide } from '../../../components/Slide';

import { TSX } from '../../../components/SyntaxHighlight';

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

export const ProvideIn = () => {
  function getImageUrl(name) {
    return new URL(`/src/assets/providers/${name}`, import.meta.url).href;
  }
  return (
    <Slide>
      <Slide>
        <h2>Let's Use A Service</h2>
        <TSX code={stuff} />
      </Slide>
      <Slide>
        <h2>The Error</h2>
        <img src={getImageUrl('no-provider.png')} />
      </Slide>
      <Slide>
        <h2>The Fix</h2>
        <ul>
          <li className="fragment">Provide in Root</li>
          <li className="fragment">Provide in Component</li>
          <li className="fragment">Provide in Application Config</li>
          <li className="fragment">Provide in Module</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Provide In Root</h2>
        <p>Tree Shaking - not used, never created</p>
        <TSX code={provideInRoot} />
      </Slide>
      <Slide>
        <h2>Provide In Component</h2>
        <p>Provided even if it's not used</p> 
        <TSX code={provideInComponent} />
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
        <h2>Provide In Component/Module</h2>
        <img src={getImageUrl('provide-in-module-component.drawio.png')} />
      </Slide>
      <Slide>
        <h2>Demo</h2>
      </Slide>
    </Slide>
  );
};
