import { Slide } from '../../../components/Slide';
import { AboutMe } from '../../../components/AboutMe';
import { Mermaid } from '../../../components/Mermaid';
export const Intro = () => (
  <>
    <Slide>
      <h2>I can provide that!</h2>
      <p>
        What's up with providers and how to use them in Standalone components.
      </p>
    </Slide>
    <AboutMe key="am" />

    <Slide>
      <h2>What we are going to look at</h2>
      <ul>
        <li className="fragment">Scope of Providers</li>
        <li className="fragment">Dependency Providers</li>
        <li className="fragment">Bootstrapping an App</li>
      </ul>
    </Slide>
    <Slide>
      <h2>Why are we going going to look at this?</h2>
      <ul>
        <li className="fragment">Back to basics</li>
        <li className="fragment">Standalone Components/Apps</li>
        <li className="fragment">Angular Updates (17+)</li>
      </ul>
    </Slide>
    <Slide>
      <Mermaid
        chart={`graph LR;
        Group:iam-admins -- contains-user --> User:Josh 
        Group:iam-admins -- contains-user --> User:Pradeep 
        User:Josh -- has-policy --> Policy:TempPolicyDebugging 
        Group:iam-admins -- has-policy --> Policy:IAMAllAccess 
        Statement:IAMAllAccess-1 -- iam:DeleteUser --> User:Josh 
        Statement:IAMAllAccess-1 -- iam:DeleteUser --> User:Josh 
        Statement:IAMAllAccess-1 -- iam:DeleteUser --> User:Pradeep 
        Statement:IAMAllAccess-1 -- iam:DeleteUser --> User:Pradeep 
        Statement:IAMAllAccess-1 -- iam:ListUsers --> Service:IAM 
      `}
      ></Mermaid>
    </Slide>
    <Slide>
      <Mermaid
        chart={`graph LR;
        Group:iam-admins -- contains-user --> User:Josh 
        Group:iam-admins -- contains-user --> User:Pradeep 
        User:Josh -- has-policy --> Policy:TempPolicyDebugging 
        Group:iam-admins -- has-policy --> Policy:IAMAllAccess 
        Statement:IAMAllAccess-1 -- iam:DeleteUser --> User:Josh 
        Statement:IAMAllAccess-1 -- iam:DeleteUser --> User:Josh 
        Statement:IAMAllAccess-1 -- iam:DeleteUser --> User:Pradeep 
        Statement:IAMAllAccess-1 -- iam:DeleteUser --> User:Pradeep 
        Statement:IAMAllAccess-1 -- iam:ListUsers --> Service:IAM 
      `}
      ></Mermaid>
    </Slide>
  </>
);
