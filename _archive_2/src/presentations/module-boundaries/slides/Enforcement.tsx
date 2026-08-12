import { Mermaid } from '~/components/Mermaid';
import { Slide } from '../../../components/Slide';
import { JSX, TSX, MD } from '~/components/SyntaxHighlight';
import { Note } from '~/components/Notes';
export const Enforcement = () => {
  return (
    <>
      <Slide>
        <h2>Quick Tip</h2>
        <p>Use NX Generators to automatically add module boundaries to new libraries.</p>
      </Slide>
      <Slide>
        <h2>Example</h2>
        <TSX
          code={`
  // npx nx g app-lib-generator admin/ui-user-details
  // npx nx g app-lib-generator admin/ui-user-details --libType=ui --scopeTarget=app1

  const projectName = options.name.replace(/\//g, '-');
  const rootComponentName = options.name.slice(options.name.lastIndexOf('/') + 1);
  const componentName = names(rootComponentName);

  const removeUnitTests = options.libType === 'model';

  const projectRoot = \`libs/\${options.scopeTarget}/\${options.name}\`;
  const importPath = \`@app/\${options.scopeTarget}/\${options.name}\`;

  const ngOptions = {
    prefix: 'app',
    name: \`\${options.scopeTarget}-\${projectName}\`,
    directory: projectRoot,
    importPath,
    tags: \`type:\${options.libType}, scope:\${options.scopeTarget}\`,
    skipModule: true,
    unitTestRunner: removeUnitTests ? UnitTestRunner.None : UnitTestRunner.Jest,
    standalone: true,
    strict: true,
    flat: true
  };

  await angularLibraryGenerator(tree, ngOptions);

  // Remove unnecessary files
`}
        ></TSX>
        <Note>
          Going in and remembering to add MB can be challening. <br />
          You can also write an executor to find all your libs without MBs
        </Note>
      </Slide>
      <Slide>
        <h2>Enforce Module Boundaries</h2>
        <TSX
          code={`
    "rules": {
        "@nrwl/nx/enforce-module-boundaries": [
        "error",
            {
                enforceBuildableLibs: true,
                depConstraints: [
                    {
                        sourceTag: "type:ui",
                        onlyDependOnLibsWithTags: ["type:ui", "type:utils"]
                    },
                    {
                        sourceTag: "type:feature",
                        onlyDependOnLibsWithTags: ["type:feature", "type:ui", "type:data-access", "type:utils"]
                    },
                    {
                        sourceTag: "type:data-access",
                        onlyDependOnLibsWithTags: ["type:data-access",  "type:utils"]
                    }
                ]
            }
        ]
    }
        `}
        ></TSX>
      </Slide>
      <Slide>
        <h2>Enforce Module Boundaries</h2>
        <TSX
          code={`
          {
            "rules": {
              "@nrwl/nx/enforce-module-boundaries": [
                "error",
                {
                  enforceBuildableLibs: true,
                  depConstraints: [
                    {
                      sourceTag: "scope:application1",
                      onlyDependOnLibsWithTags: ["scope:application1", "scope:shared"]
                    },
                    {
                      sourceTag: "scope:application2",
                      onlyDependOnLibsWithTags: ["scope:application2", "scope:shared"]
                    },
                     {
                      sourceTag: "scope:shared",
                      onlyDependOnLibsWithTags: ["scope:shared"]
                    },
 
                 ]
                }
              ]
            }
          }
        `}
        ></TSX>
        <Note>
          ESLint config is just javascript. You can write functionality to dynamically generate the rules.
          <br />
          You can also use a Node or Nuscript script to generate the rules based on your project structure.
        </Note>
      </Slide>
      <Slide>
        <h2>Additional Settings</h2>
        <TSX
          code={`
          {
            "rules": {
              "@nrwl/nx/enforce-module-boundaries": [
                "error",
                {
                  enforceBuildableLibs: true,
                  allow: ['@shared/**', '@features/**', '@store/**', '@services/**'], // Migration strategy
                  depConstraints: [
                    {
                      sourceTag: "scope:shared",
                      notDependOnLibsWithTags: ["scope:application1", "scope:application2"]
                    },
                    {
                      allSourceTags: ["scope:admin", "type:ui"],
                      onlyDependOnLibsWithTags: ["type:util"],
                      allowedExternalImports: ["@angular/core", "@angular/common"] // Allow Angular imports
                      bannedExternalImports: ["*router*", "@angular/common/http"] // Rejects Angular Router & http imports
                    }
                 ]
                }
              ]
            }
          }
        `}
        ></TSX>
        <Note>
          <ul>
            <li>sourceTag or allSourceTags - must have one</li>
            <li>enforceBuildableLibs- Enforces that libraries are buildable</li>
            <li>imports- Exclusive list of external (npm) packages</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Migrating to Module Boundaries</h2>
        <ul>
          <li className="fragment">Identify a pattern you want to follow with your team</li>
          <li className="fragment">Setup ignore for old folders/paths as you migrate</li>
          <li className="fragment">Write a generator/executor to find libs without tags</li>
          <li className="fragment">Leave code better than you found it</li>
        </ul>
        <Note>
          <ul>
            <li>Setup a pattern you want to initially follow, write an ADR on it</li>
            <li>Leverage the "allow" setting, tag items as feature until you can refactor to smaller bits</li>
            <li>If you already have libs, you can write a generator to find the libs without tags</li>
            <li>Find UI libs without storybook or component testing, build out the command to generate them</li>
          </ul>
        </Note>
      </Slide>
      <Slide>
        <h2>Migration Step 1</h2>
        <div className="two-col col-top">
          <div className="fragment">
            <MD
              code={`
  apps/
    admin/
      components/
      services/
      store/
      admin.component
    roster/
`}
            />
          </div>
          <div className="fragment">
            <MD
              code={`
  apps/
    roster/
  libs/
    admin/
      feature-admin/ <-- Feature Lib
        components/
        services/
        store/
        admin.component
 
`}
            />
          </div>
        </div>
      </Slide>
      <Slide>
        <h2>Migration Step 2</h2>
        <div className="two-col col-top">
          <div className="fragment">
            <MD
              code={`
  apps/
    roster/
  libs/
    admin/
      feature-admin/
        components
        services
        store
        admin.component
 
`}
            />
          </div>
          <div className="fragment">
            <MD
              code={`
  apps/
    roster/
  libs/
    admin/
      data-access-admin/ <-- previously services and store
      feature-admin/
        admin.component
      ui-admin/ <-- Previously components
 
`}
            />
          </div>
        </div>
      </Slide>

      <Slide>
        <h2>Vanilla Angular Module Boundaries</h2>
        <h3>They don't exist, but we can use a tool to enforce them</h3>
        <h4 className="fragment">
          <a href="https://sheriff.softarc.io/" target="_blank">
            Sheriff
          </a>
        </h4>
      </Slide>

      <Slide>
        <h2>Example Sheriff Config</h2>
        <TSX
          code={`
    import {noDependencies, sameTag, SheriffConfig } from '@softarc/sheriff-core';

    export const sheriffConfig: SheriffConfig = {
        modules: {
            // Manual configuration of modules
            'src/app/admin/feature': ['scope:admin', 'type:feature'],
            'src/app/admin/data': ['scope:admin', 'type:data'],
            'src/app/roster/feature': ['scope:roster', 'type:feature'],
            'src/app/roster/data': ['scope:roster', 'type:data'],

            'src/app/<scope>/<type>': ['scope:<scope>', 'type:<type>']
        },
        depRules: {
            root: ['*'],

            'scope:*': [sameTag, 'scope:shared'],

            'type:feature': ['type:ui', 'type:data', 'type:util'],
            'type:ui': ['type:data', 'type:util'],
            'type:data': ['type:util'],
            'type:util': noDependencies,
        },
    };
            `}
        />
      </Slide>
      <Slide>
        <h2>Sheriff ESLint Config</h2>
        <TSX
          code={`
 const sheriff = require('@softarc/eslint-plugin-sheriff');
 module.exports = tseslint.config(
  // ... previous rules
  {
    files: ['**/*.ts'],
    extends: [sheriff.configs.all],
  },
);
        `}
        />
      </Slide>
      <Slide>
        <h2>Sheriff CLI</h2>
        <MD
          code={`

  npx sheriff init  // Creates your sheriff.config.ts

  npx sheriff verify main.ts // Verifies your module boundaries

        `}
        />
      </Slide>
    </>
  );
};
