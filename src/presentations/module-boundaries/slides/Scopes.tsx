import { Mermaid } from '~/components/Mermaid';
import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
export const Scopes = () => {
  return (
    <>
      <Slide>
        <h2>Going deeper with Scopes</h2>
      </Slide>
      <Slide>
        <h3>Everyone Stays In Their Lane With Scopes</h3>
        <Mermaid
          chart={`
        stateDiagram-v2
    classDef admin fill:white
    classDef app fill:#4bfa66

    SCOPE_admin --> utils_admin
    utils_admin --> ui_admin
    utils_admin --> feature_admin
    utils_admin --> data_access_admin
    data_access_admin --> feature_admin
    ui_admin --> feature_admin
    SCOPE_roster --> utils_roster 
    utils_roster --> ui_roster
    utils_roster --> feature_roster
    utils_roster --> data_access_roster
    data_access_roster --> feature_roster
    ui_roster --> feature_roster
    feature_admin --> Application
    feature_roster --> Application

    class SCOPE_admin admin
    class utils_admin admin
    class feature_admin admin
    class ui_admin admin
    class data_access_admin admin
    class Application app

        `}
        ></Mermaid>
      </Slide>
      <Slide>
        <h2>Let's Add Some Shared Stuff</h2>
        <Mermaid
          chart={`
        stateDiagram-v2
   classDef admin fill:white
    classDef app fill:#4bfa66 
    classDef shared fill:#f56969 

    SCOPE_admin --> utils_admin
    utils_admin --> ui_admin
    utils_admin --> feature_admin
    utils_admin --> data_access_admin
    data_access_admin --> feature_admin
    ui_admin --> feature_admin

    SCOPE_shared --> shared_ui_avatar
    SCOPE_shared --> shared_ui_list_item
    shared_ui_avatar --> feature_admin
    shared_ui_list_item --> feature_admin
    shared_ui_avatar --> feature_roster
    shared_ui_list_item --> feature_roster


    SCOPE_roster --> utils_roster 
    utils_roster --> ui_roster
    utils_roster --> feature_roster
    utils_roster --> data_access_roster
    data_access_roster --> feature_roster
    ui_roster --> feature_roster
    feature_admin --> Application
    feature_roster --> Application
      class SCOPE_admin admin
    class utils_admin admin
    class feature_admin admin
    class ui_admin admin
    class data_access_admin admin
    class Application app

    class SCOPE_shared shared
    class shared_ui_avatar shared
    class shared_ui_list_item shared

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
        <div className="fragment">
          <h4>You can write code to automatically manage this.</h4>
        </div>
      </Slide>
      <Slide>
        <h2>Other Types of Boundaries</h2>
        <ul>
          <li className="fragment">platform:mobile|web|desktop</li>
          <li className="fragment">framework:angular|react|typescript</li>
          <li className="fragment">component:core|bespoke</li>
          <li className="fragment">version:modern|legacy</li>
          <li className="fragment">developer:daniel|jacob</li>
        </ul>
      </Slide>
    </>
  );
};
