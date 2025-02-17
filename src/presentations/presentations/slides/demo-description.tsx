import { Slide } from '../../../components/Slide';
import { Note } from '~/components/Notes';
import { Mermaid } from '../../../components/Mermaid';
export const DemoDescription = () => {
  return (
    <>
     <Slide>
          <h3>Agile Cycle</h3>
          <Mermaid
            chart={`
       graph LR
    Plan --> Execute
    Execute --> Deploy
    Deploy --> Demo
    Demo --> Retro
    Retro --> Plan
        `}
          ></Mermaid>
          <Note>
            This is more of the agency side of things where teams work off fuzzy requirements and need frequent feedback <br />
          </Note>
        </Slide>
        <Slide>
          <h3>What is the purpose of the Demo</h3>
          <ul>
            <li className="fragment">Show off the work done during sprint </li>
            <li className="fragment">Share new functionality with stakeholders</li>
            <li className="fragment">Show basic functionality to someone unfamiliar with the application</li>
          </ul>
          <Note>
            - They are to show off the successful work accomplished during the last x period of time
            <br />
            Show visible progress to stakeholders
          </Note>
        </Slide>
    </>
  );
};
