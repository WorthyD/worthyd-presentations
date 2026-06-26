import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';

import { TSX, JSON } from '../../../components/SyntaxHighlight';
import { Mermaid } from '~/components/Mermaid';

const httpRequestOriginal = `
    import { HttpClient } from '@angular/common/http';
    import { AppConfigEndpointsService } from '@match/shared/app-config';

    @Injectable({
        providedIn: 'root'
    })
    export class AutoCompleteService{
        endpointCollection: any;
        constructor(
            private readonly http: HttpClient, 
            private readonly appConfigEndpointService: AppConfigEndpointsService
        ) {
            endpointCollection = this.appConfigEndpointService.getApi('autoCompleteEndpoints');
        }

        $users = this.http.get(this.endpoint.getUserAutocomplete)
                .pipe(map((response) => response.users));
    } 
`;

const httpRequestFix = `
    import { HttpClient } from '@angular/common/http';

    @Injectable({
        providedIn: 'root'
    })
    export class AutoCompleteService{
        GET_USER_AUTOCOMPLETE_ENDPOINT = 'api/autocomplete/users';

        http = inject(HttpClient);

        $users = this.http.get(this.GET_USER_AUTOCOMPLETE_ENDPOINT)
                .pipe(map((response) => response.users));
    } 
`;

const httpUsers = `
    import { HttpClient } from '@angular/common/http';

    /**
     * Swagger Required
     * https://match-api-dev.nonprod.jbhunt.com/match-masterdata/swagger-ui/index.html#/Users
     * libs/shared/data-access/match-masterdata/src/lib/users.service.ts
     */
    @Injectable({
        providedIn: 'root'
    })
    export class AutoCompleteService{
        http = inject(HttpClient);

        GET_USERS = 'api/match-masterdata/v1/users';
        GET_USERS_DETAILS = 'api/match-masterdata/v1/users/details';
        GET_USER_DETAILS = 'api/match-masterdata/v1/user/{user-uid}/details';
        GET_USER_PROJECT_CODE_DETAILS = 'api/match-masterdata/v1/user/project-code/{user-board-code}/detail';

        getUsers(query: string, limit = 1000) {
          return this.http.get<UserSearchResult[]>(this.GET_USERS, {
            params: { query, limit }
          });
        }

        getUsersDetails(userIds: string[]) {
          return this.http.get<UserSearchResult[]>(this.GET_USERS_DETAILS, {
            params: { userIds }
          });
        }

    } 
`;

export const Strategy = () => {
  return (
    <>
      <Slide>
        <h2>Current Strategy</h2>
      </Slide>
      <Slide>
        <h2>See something fix something</h2>
        <div className="fragment">
          <TSX code={httpRequestOriginal} />
        </div>
        <Note>
          <ul></ul>
        </Note>
      </Slide>
      <Slide>
        <h2>See something fix something</h2>
        <div className="fragment">
          <TSX code={httpRequestFix} />
        </div>
        <Note>
          <ul></ul>
        </Note>
      </Slide>
      <Slide>
        <h2>New Strategy Based on App</h2>
        <h3>
          <code>api/match-masterdata/v1/users</code>
        </h3>
        <ul>
          <li className="fragment">1 UI Library per WS App</li>
          <li className="fragment">match-masterdata, match-load-search</li>
          <li className="fragment">1 Angular Service per app controller</li>
          <li className="fragment">Users, Accounts, Carriers, etc</li>
        </ul>
        <Note>
          <ul>
            <li>https://match-api-dev.nonprod.jbhunt.com/match-masterdata/swagger-ui/index.html#/Users</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Why are we doing this?</h2>
        <ul>
          <li className="fragment">Help UI Devs better understand where data is coming from</li>
          <li className="fragment">Encourages developers to use Swagger to better understand API endpoints</li>
          <li className="fragment">1 to 1 relationship for all endpoints and fewer duplicate services</li>
        </ul>
        <Note>
          <ul></ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Example</h2>
        <div className="fragment">
          <TSX code={httpUsers} />
        </div>
        <Note>
          <ul></ul>
        </Note>
      </Slide>
      <Slide>
        <h2>How do we use these?</h2>
        <ul>
          <li className="fragment">Single use? Feature Data Access</li>
          <li className="fragment">libs/match/feature/data-access</li>
          <li className="fragment">Used a lot use? App Data Access</li>
          <li className="fragment">libs/match/shared/data-access</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Visual</h2>
        <Mermaid
          chart={`
sequenceDiagram
participant A as Match/Feature/Data-Access/Users
participant B as Match/Shared/Data-Access/Users
participant C as Root/Shared/Data-Access/Users
A->>+B: Base Request
B-->>-A: Cached Response(?)
B->>+C: Make Request
C->>B: Response
B->>A: Decorated Response`}
        />
        <Note>
          <ul>
            <li>
              `Match/Feature/Data-Access/Users` - Service that lives closet to end feature and handle feature specific
              functionality/transformations.
            </li>

            <li>
              `Match/Shared/Data-Access/Users` - Service at the root level of the Match application. This service is responsible for
              surfacing any errors with toast notifications and modifying response objects to be more usable See Figure a.
            </li>
            <li>`Root/Shared/Data-Access/Users` - Root repo level service. Should contain minimal level of code</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2> Distributed visualiation</h2>
        <Mermaid chart={`
          flowchart BT
subgraph Match App
subgraph Feat Tender To Resource
direction BT
D[data-access-tender-to-resource]
end
subgraph Feat Operational Activities
direction BT
F[data-access-check-calls]
end
subgraph "Match Shared (Caching?, Error Handling?, etc)"
    direction BT
    A[location-autocomplete-service]
    A --> D
    A --> F
 end
end
subgraph Lane History App
    direction BT
    I[data-access-lane-history]
 end
subgraph Global Shared
direction BT
    C[match-masterdata / location-search]
    end
    C --> A
    C --> I         
          
          `} />
      </Slide>
    </>
  );
};
