import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
import { JSON } from '~/components/SyntaxHighlight';
export const Intro = () => {
  return (
    <>
      <Slide>
        <h2>What we are going to cover</h2>
        <ul>
          <li className="fragment">Define Module Boundaries</li>
          <li className="fragment">High Level Benefits</li>
          <li className="fragment">Boundary Types</li>
          <li className="fragment">Tooling</li>
        </ul>
        <Note>
          <ul></ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Have you ever wondered where a new piece of functionality should live or where functionality currently resides?</h2>
        <Note>
          <ul>
            <li>We're going to talk about some patterns and practices that can potentially help alleviate that.</li>
            <li>Understanding module boundaries can help answer these questions.</li>
            <li>It can also aid in the organization and maintainability of your codebase.</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>What are Module Boundaries?</h2>
        <ul>
          <li className="fragment">Guidelines for structuring your code</li>
          <li className="fragment">Define how different parts of your application interact</li>
          <li className="fragment">Help in organizing code into manageable sections</li>
        </ul>
        <Note>
          <ul>
            <li>Module boundaries help define the structure of your application.</li>
            <li>They can be physical (like directories) or logical (like namespaces).</li>
            <li>Understanding these boundaries can lead to better code organization and maintainability.</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Why are Module Boundaries Important?</h2>
        <ul>
          <li className="fragment">Enhance code readability and maintainability</li>
          <li className="fragment">Facilitate easier testing and debugging</li>
          <li className="fragment">Promote reusability of code components</li>
        </ul>
        <Note>
          <ul>
            <li>Clear module boundaries can make your codebase easier to navigate.</li>
            <li>They can also help in isolating issues during testing and debugging.</li>
            <li>Well-defined boundaries can lead to reusable components, reducing duplication of effort.</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Applying Module Boundaries</h2>

<JSON code={`{
  "name": "my-app-admin",
  "$schema": "../../../../node_modules/nx/schemas/project-schema.json",
  "projectType": "library",
  "sourceRoot": "libs/my-app/feature-admin/src",
  "prefix": "my-app",
  "tags": ["type:feature", "scope:my-app", "platform:web"], // <-- Tags for boundaries
  "targets": {
    "test": {
      "executor": "@nx/jest:jest",
      "outputs": ["{workspaceRoot}/coverage/libs/my-app/feature-admin"],
      "options": {
        "jestConfig": "libs/my-app/feature-admin/jest.config.ts"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    }
  }
}
`}/>

      </Slide>
    </>
  );
};
