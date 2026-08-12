import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';

import { TSX, JSON } from '../../../components/SyntaxHighlight';

const httpRequest = `
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

        // strict mode
        $usersv2 = this.http.get(this.endpoint['getUserAutocomplete'])
                .pipe(map((response) => response.users));
 
    } 
`;

const endpointService = `
    @Injectable({
        providedIn: 'root'
    })
    export class AppConfigEndpointsService {
        private readonly endpoints: EndpointsCategories;

        constructor(@Inject(ENDPOINTS_CONFIG) private readonly appConfig: EndpointsModel) {
            this.endpoints = this.appConfig.api;
        }

        public getApi(moduleName: string): EndpointCollection {
            return moduleName ? this.endpoints[moduleName] : { '': '' };
        }
    }
    //In app startup
    export const APP_ENV_CONFIG_PATH = './assets/config/app.config.json';
    providers: [{provide: ENDPOINTS_CONFIG, useValue: APP_ENV_CONFIG_PATH}]
`;
const jsonEndpoints = `
{
 "api": {
    "confidence-admin": {
      "getRuleSummaries": "api/ws_loadplanning_match_automation_confidence_admin/confidence-admin/ruleListSummary",
      "getRuleDetails": "api/ws_loadplanning_match_automation_confidence_admin/confidence-admin/ruleDetails/RULE_ID",
      "createRule": "api/ws_loadplanning_match_automation_confidence_admin/confidence-admin/rules",
      ...
      "activateRule": "api/ws_loadplanning_match_automation_confidence_admin/confidence-admin/ruleDetails/RULE_ID/activate",
      "deactivateRule": "api/ws_loadplanning_match_automation_confidence_admin/confidence-admin/ruleDetails/RULE_ID/deactivate",
      "getZipcodes": "api/ws_loadplanning_match_automation_confidence_admin/confidence-admin/zip-codes/COUNTRY_CODE?searchQuery=",
      "bulkDeactivateRules": "api/ws_loadplanning_match_automation_confidence_admin/confidence-admin/v1/ruleDetails/deactivateRules",
      "bulkActivateRules": "api/ws_loadplanning_match_automation_confidence_admin/confidence-admin/v1/ruleDetails/activateRules"
    },
    "carrier": {
      "isCarrierTrackedByProvider": "api/ws_operationsexecution_carrierTrackingPreferences/tracking-profile/enabled",
      "getCarrierOverview": "api/match-masterdata/v1/carrier/LOOKUP_VALUE/LOOKUP_TYPE/overview",
      ....
      "getDefaultTenderMethodByCarrier": "api/enterprise-tender/tender/control/auto-tender/CARRIER_CODE",
      "getDefaultTenderMethodByCarrierAndUser": "api/enterprise-tender/tender/control/group-rules/CARRIER_CODE/ACTION_PARAMETER_CRITERIA_CODE/ACTION_PARAMETER_CRITERIA_VALUE"
    },

}
`;

export const Current = () => {
  return (
    <>
      <Slide>
        <h2>Current Method Making Web Requests</h2>
        <div className="fragment">
          <TSX code={httpRequest} />
        </div>
        <Note>
          <ul></ul>
        </Note>
      </Slide>
      <Slide>
        <h2>What's happening behind the scenes to get the URL?</h2>
        <div className="fragment">
          <TSX code={endpointService} />
        </div>
        <Note>
          <ul></ul>
        </Note>
      </Slide>
      <Slide>
        <h2>What does that JSON look like?</h2>
        <JSON code={jsonEndpoints} />
        <Note>
          <ul><li>URLs could exist in multiple 'modules'</li></ul>
        </Note>
 
      </Slide>
      <Slide>
        <h2>Problems with this approach?</h2>
        <ul>
          <li className="fragment">Not type safe</li>
          <li className="fragment">Not easily discoverable</li>
          <li className="fragment">Hard to maintain</li>
          <li className="fragment">Duplicate Strings</li>
          <li className="fragment">Duplicate files</li>
          <li className="fragment">No longer hosted on physical servers</li>
        </ul>
        <Note>
          <ul>
            <li>Not type safe - we can easily make a typo and not know until runtime</li>
            <li>Not easily discoverable - we have to know to look in the JSON file to find endpoints</li>
            <li>
              Hard to maintain - if we need to update an endpoint, we have to find it in the JSON file and update it there. If we need to
              add a new endpoint, we have to add it to the JSON file and then add a new method to the service that uses it.
            </li>
            <li>Duplicate Strings - we have to repeat the endpoint strings in the JSON file and in the service methods</li>
            <li>Duplicate files - we have to duplicate URLs across multiple deployable</li>
            <li>We don't have physical servers - the endpoints are just strings and don't correspond to actual servers</li>
          </ul>
        </Note>
      </Slide>
    </>
  );
};
