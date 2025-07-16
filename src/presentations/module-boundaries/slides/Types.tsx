import { Mermaid } from '~/components/Mermaid';
import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
import { MD } from '~/components/SyntaxHighlight';
export const Types = () => {
  return (
    <>
      <Slide>
        <h2>Boundary Types</h2>
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
          <ul></ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Custom Types</h2>
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
          <ul></ul>
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
        <div className="small-text">Replace _ with -. Mermaid charts don't like hyphens</div>
      </Slide>
      <Slide>
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
      data-access
      feature-admin
      ui-admin
      utils-admin
    roster/ <-- Grouping Folder
      data-access
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
        <Note>Grouping folder are the preferred way to organize the code.</Note>
      </Slide>
      <Slide>
        <h2>How types help build pipeline</h2>
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
      data-access
      feature-admin
        profile
        user-import
        user-list
      ui-admin
        avatar
        list-item
      utils-admin
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
      data-access
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
This both impacts folder structure and potentially length of time the pipeline runs
<br />
Libraries have 'spinup' time, so the more libraries you have, the longer it takes to run the pipeline
        </Note>
      </Slide>
    </>
  );
};
