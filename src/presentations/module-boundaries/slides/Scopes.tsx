import { Mermaid } from '~/components/Mermaid';
import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
import { MD } from '~/components/SyntaxHighlight';
export const Scopes = () => {
  return (
    <>
      <Slide>
        <h2>Going deeper with Scopes</h2>
      </Slide>
      <Slide>
        <h2>Everyone Stays In Their Lane</h2>
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
        <h2>Let's Add Some Shared Stuff</h2>
        <Mermaid
          chart={`
        stateDiagram-v2
    
    utils_admin --> ui_admin
    utils_admin --> feature_admin
    utils_admin --> data_access_admin
    data_access_admin --> feature_admin
    ui_admin --> feature_admin

    shared_ui_avatar --> feature_admin
    shared_ui_list_item --> feature_admin
    shared_ui_avatar --> feature_roster
    shared_ui_list_item --> feature_roster


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
        <h2>Scopes Specificity</h2>
        <div className="three-col col-top">
          <div className="fragment">
            <h3>Small Apps</h3>
            <ul>
              <li>scope:admin</li>
              <li>scope:roster </li>
              <li>scope:shared</li>
            </ul>
          </div>
          <div className="fragment">
            <h3>Monorepo</h3>
            <ul>
              <li>scope:application1</li>
              <li>scope:application2</li>
            </ul>
          </div>
          <div className="fragment">
            <h3>Specific</h3>
            <ul>
              <li>scope:application1:feature1</li>
              <li>scope:application2:feature2</li>
            </ul>
          </div>
        </div>
      </Slide>
      <Slide>
        <h2>Other Types of Boundaries</h2>
        <ul>
            <li className="fragment">platform:mobile|web|desktop</li>
            <li className="fragment">version:modern|legacy</li>
            <li className="fragment">developer:daniel|jacob</li>
        </ul>
      </Slide>
    </>
  );
};
