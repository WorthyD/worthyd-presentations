import { Mermaid } from '~/components/Mermaid';
import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
import { MD } from '~/components/SyntaxHighlight';
export const Types = () => {
  return (
    <>
      <Slide>
        <h2>
          Boundary Types <small>as defined by NX</small>
        </h2>
        <div className="two-col col-top">
          <div>
            <dl>
              <dt className="fragment">app</dt>
              <dd className="fragment small-text">Servable application, e.g. a web app, mobile app, etc.</dd>
              <dt className="fragment">feature</dt>
              <dd className="fragment  small-text">Business logic, container/smart components</dd>
              <dt className="fragment">data-access</dt>
              <dd className="fragment small-text">API access & state management</dd>
            </dl>
          </div>
          <div className="col-top">
            <dl>
              <dt className="fragment">ui</dt>
              <dd className="fragment small-text">Presentation components</dd>
              <dt className="fragment">utils</dt>
              <dd className="fragment small-text">Pure code functions, formatters, DTO converters</dd>
            </dl>
          </div>
        </div>
        <Note>
          <ul>
            <li>App - main thing you compile and run</li>
            <li>Feature - Usually something you can navigate to or complex component</li>
            <li>DA - Web requests</li>
            <li>UI - Presentational components. Storybook and Component testing</li>
            <li>Utils - Pure functions, e.g. formatters, DTO converters, etc.</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>What can use what?</h2>
        <div className="two-col col-top">
          <div>
            <dl>
              <dt className="fragment">app</dt>
              <dd className="fragment small-text">can import all the things</dd>
              <dt className="fragment">feature</dt>
              <dd className="fragment  small-text">feature, data-access, ui, utils</dd>
              <dt className="fragment">data-access</dt>
              <dd className="fragment small-text">data-access, utils</dd>
            </dl>
          </div>
          <div className="col-top">
            <dl>
              <dt className="fragment">ui</dt>
              <dd className="fragment small-text">ui, utils</dd>
              <dt className="fragment">utils</dt>
              <dd className="fragment small-text">utils</dd>
            </dl>
          </div>
        </div>
      </Slide>

      <Slide>
        <h2>What can use what?</h2>
        <Mermaid
          chart={`
        stateDiagram-v2
    utils_admin --> ui_admin
    utils_admin --> feature_admin
    utils_admin --> data_access_admin
    data_access_admin --> feature_admin
    ui_admin --> feature_admin
    feature_admin --> Application
        `}
        ></Mermaid>
        <div className="small-text">Replace _ with -. Hyphens don't work well in Mermaid Charts</div>
      </Slide>
      <Slide>
        <h2>Basic Structure</h2>
        <Mermaid
          chart={`
        stateDiagram-v2
    utils_admin --> ui_admin
    utils_admin --> feature_admin
    utils_admin --> data_access_admin
    data_access_admin --> feature_admin
    ui_admin --> feature_admin
    utils_roster --> ui_roster
    utils_roster --> feature_roster
    utils_roster --> data_access_roster
    data_access_roster --> feature_roster
    ui_roster --> feature_roster
    feature_admin --> Application
    feature_roster --> Application
        `}
        ></Mermaid>
      </Slide>
      <Slide>
        <h2>
          Custom Types <small>as defined by you</small>
        </h2>
        <div className="two-col col-top">
          <div>
            <dl>
              <dt className="fragment">models</dt>
              <dd className="fragment small-text">interfaces, types and enums</dd>
              <dt className="fragment">e2e-utils</dt>
              <dd className="fragment  small-text">reusable cypress commands for end-to-end and component testing</dd>
            </dl>
          </div>
          <div className="col-top">
            <dl>
              <dt className="fragment">assets</dt>
              <dd className="fragment small-text">Static assets, e.g. images, fonts, etc.</dd>
              <dt className="fragment">store</dt>
              <dd className="fragment small-text">NGRX state management</dd>
            </dl>
          </div>
        </div>
        <Note>
          <ul>
            <li>Models - Instance where we wanted models to be available everywhere.</li>
            <li>e2e-utils - old login method, select by data-cy attr, .</li>
            <li>assets - shared scss files, images </li>
            <li>store</li>
          </ul>
        </Note>
      </Slide>

      <Slide>
        <h2>How do we organize this mess?</h2>

        <div className="two-col col-top">
          <div className="fragment">
            <h3>Grouping Folders</h3>
            <MD
              code={`
  app/
    application
  libs/
    admin/ <-- Grouping Folder
      data-access-admin
      feature-admin
      ui-admin
      utils-admin
    roster/ <-- Grouping Folder
      data-access-admin
      feature-roster
      ui-roster
      utils-roster
`}
            />
          </div>
          <div className="fragment">
            <h3>Nesting Folders</h3>
            <MD
              code={`
  app/
    application
  libs/
    admin/ 
      data-access/ <-- Heavy Nesting
        admin
      feature/
        details   
        profile
        shell
      ui/
        admin
      utils/
        admin
`}
            />
          </div>
        </div>
        <Note>
          Method 1. Attach type to folder name. <br />
          Method 2. Next libs in folder with name of type <br />
          Grouping folder are the preferred way to organize the code by nx <br />
          decide as a team
        </Note>
      </Slide>

      <Slide>
        <h2>Finding Balance</h2>

        <div className="two-col col-top">
          <div className="fragment">
            <h3>Heavy Libraries</h3>
            <MD
              code={`
  libs/
    admin/ 
      data-access-admin  <--Library
      feature-admin  <--Library
        profile
        user-import
        user-list
      ui-admin   <--Library
        avatar
        list-item
      utils-admin  <--Library
        helpers
`}
            />
          </div>
          <div className="fragment">
            <h3>Library Heavy</h3>
            <MD
              code={`
  libs/
    admin/  
      data-access <-- Everything is a library
      feature-profile
      feature-shell
      feature-user-import
      feature-user-list
      ui-avatar
      ui-list-item
      utils-helpers
`}
            />
          </div>
        </div>
        <Note>
          <ul>
            <li>This both impacts folder structure and potentially length of time the pipeline runs</li>
            <li>Libararies have spin up time. Load jest config, find test files, etc</li>
            <li>what is better 10 libraries with 100 tests each or 100 libraries with 10 tests each?</li>
          </ul>
          <br />
        </Note>
      </Slide>
      <Slide>
        <h2>Quick Benefit</h2>
        <h3>How types help build pipeline</h3>
        <Mermaid
          chart={`
        stateDiagram-v2
    utils_helpers --> ui_avatar
    utils_helpers --> ui_list_item
    ui_avatar --> feature_profile
    ui_avatar --> feature_user_list
    ui_list_item --> feature_user_list
    data_access_admin --> feature_profile
    data_access_admin --> feature_user_list
    data_access_admin --> feature_user_import
    feature_user_import --> feature_admin_shell
    feature_user_list --> feature_admin_shell
    feature_profile --> feature_admin_shell
    feature_admin_shell --> Application
        `}
        ></Mermaid>
        <Note>
          <ul>
            <li>Types establish a hierarchical structure to code</li>
            <li>Affected graph</li>
            <li>Show effected and how it speeds up/slows down pipelines</li>
          </ul>
        </Note>
      </Slide>
    </>
  );
};
