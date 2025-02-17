import LayoutDeck from '../../../layouts/LayoutDeck';
import { Slide } from '../../../components/Slide';

import { Note } from '~/components/Notes';

import Apdex2023 from '~/assets/private/2024/appdex-2023.png';
import Apdex2024 from '~/assets/private/2024/appdex-2024.png';

import JSErrors2023 from '~/assets/private/2024/js-errors-2023.png';
import JSErrors2024 from '~/assets/private/2024/js-errors-2024.png';

import Cypress2024 from '~/assets/private/2024/cypress-2024.png';

import Bundle2023 from '~/assets/private/2024/bundle-2023.png';
import Bundle2024 from '~/assets/private/2024/bundle-2024.png';
import Sonar2024 from '~/assets/private/2024/sonar-2024.png';
import Sonar20242 from '~/assets/private/2024/sonar-2024-2.png';
import Egg from '~/assets/private/2024/egg.jpg';

const Providers = () => {
  return (
    <>
      <LayoutDeck>
        <Slide>
          <h1>2024 Match Front End Review</h1>
          <Note>Make sure to thank the BE team.</Note>
        </Slide>
        <Slide>
          <h1>Agenda</h1>
          <ul>
            <li>Our 2023/2024 Situation</li>
            <li>Performance Indicators</li>
            <li>2024 Accomplishments</li>
            <li>Late 2024/2025 Goals</li>
          </ul>
        </Slide>
        <Slide>
          <h1>Our Late 2023/2024 Situation</h1>
          <Note>
            new main person <br />
            FE on CVE's <br />
            MIDAS was priority <br />
            GRC
          </Note>
        </Slide>

        <Slide>
          <h1>Performance "Indicators"</h1>
        </Slide>
        <Slide>
          <h2>Apdex</h2>
          <div className="two-col">
            <div>
              <h3>2023</h3>
              <img src={Apdex2023} alt="" style={{ height: 200, width: 'auto' }} />
            </div>
            <div>
              <h3>2024</h3>
              <img src={Apdex2024} alt="" style={{ height: 200, width: 'auto' }} />
            </div>
          </div>
          <Note>
            Apdex doesn't matter much, but we've been in a degradation. <br />
            combo of FE and BE external factors impact us <br />
            Reloads - Natalie
          </Note>
        </Slide>

        <Slide>
          <h2>JS Errors</h2>
          <div className="two-col">
            <div>
              <h3>2023</h3>
              <img src={JSErrors2023} alt="" style={{ height: 200, width: 'auto' }} />
            </div>
            <div>
              <h3>2024</h3>
              <img src={JSErrors2024} alt="" style={{ height: 200, width: 'auto' }} />
            </div>
          </div>
          <Note>
            Don't be fooled. There was a spike in the middle of the year that skews the graph <br />
            typically sit between .75 and 1.5 a minute.
          </Note>
        </Slide>
        <Slide>
          <h2>Sonar</h2>

          <img src={Sonar2024} alt="" />
          <Note>
            security and reliability all green <br />
            size = number of lines <br />
            big circle loads reducer at 1400 lines <br />
            nothing in the top right corner makes me happy
          </Note>
        </Slide>
        <Slide>
          <h2>Sonar</h2>
          <img src={Sonar20242} alt="" />
        </Slide>
        <Slide>
          <h2>Health Check Times</h2>
          <div className="two-col">
            <div>
              <h3>2023</h3>
              <h4>19m 30s</h4>
            </div>
            <div>
              <h3>2024</h3>
              <h4>18m 51s</h4>
            </div>
          </div>
        </Slide>
        <Slide>
          <h2>Health Check Times</h2>
          <img src={Cypress2024} alt="" style={{ height: 250, width: 'auto' }} />
        </Slide>

        <Slide>
          <h2>Initial Bundle Size 2019-2023</h2>
          <img src={Bundle2023} alt="" />
          <Note>Angular material goes over our warnings</Note>
        </Slide>
        <Slide>
          <h2>Initial Bundle Size 2024</h2>
          <img src={Bundle2024} alt="" />
        </Slide>
        <Slide>
          <h2>Priorities</h2>
        </Slide>

        <Slide>
          <h2>2023 Initiatives</h2>
          <div className="four-col col-top">
            <ul className="tree-view">
              <li>
                <span>New Internal Standards</span>
                <ul>
                  <li>
                    <span>Strict Templates</span>
                  </li>
                  <li>
                    <span>Responsibility for failed cypress tests</span>
                  </li>
                  <li>
                    <span>PR Template</span>
                  </li>
                  <li>
                    <span>Dependency Updates</span>
                  </li>
                  <li>
                    <span>Update Cadence</span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="tree-view">
              <li>
                <span>New External Standards</span>
                <ul>
                  <li>
                    <span>YAML-based pipeline</span>
                  </li>
                  <li>
                    <span>Angular upgrade cadence</span>
                  </li>
                  <li>
                    <span>DS upgrade Cadence</span>
                  </li>
                  <li>
                    <span>Node Upgrade cadence</span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="tree-view">
              <li>
                <span>Achieved Priorities</span>
                <ul>
                  <li>
                    <span>Streamlined pipeline</span>
                  </li>
                  <li>
                    <span>Eliminated primeng</span>
                  </li>
                  <li>
                    <span>Reduced Bundle Size</span>
                  </li>
                  <li>
                    <span>Dependency Updates</span>
                  </li>
                  <li>
                    <span>Implemented NX tooling</span>
                  </li>
                  <li>
                    <span>Embraced NX workflow</span>
                  </li>
                  <li>
                    <span>Retired Load View API from the FE</span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="tree-view">
              <li>
                <span>Ongoing Efforts</span>
                <ul>
                  <li>
                    <span className="fragment custom highlight">Further embrace NX architecture</span>
                  </li>
                  <li>
                    <span className="fragment custom highlight">Further reduce bundle size</span>
                  </li>
                  <li>
                    <span>Refactor OMS</span>
                  </li>
                  <li>
                    <span>Reduce the role of app.component down to routing</span>
                  </li>
                  <li>
                    <span className="fragment custom highlight">Remove more old feature toggles</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Note>External initiatives - Git Leaks</Note>
        </Slide>

        <Slide>
          <h2>2024 Accomplishments & Features</h2>
          <div className="two-col col-top">
            <div>
              <h4>Accomplishments</h4>
              <ul className="rem1">
                <li className="fragment">
                  Angular 17 <span className="fragment"> and 18 7/15</span>
                </li>
                <li className="fragment">Cypress 13 from 10</li>
                <li className="fragment">Cypress MFA login</li>
                <li className="fragment">Component Tests</li>
                <li className="fragment">Service Worker!</li>
                <li className="fragment">-13 and +3 toggles</li>
                <li className="fragment">Multi Helm Deployments w/ 1 pipeline</li>
                <li className="fragment">Leveraged NX effectively (next slide)</li>
                <li className="fragment">Helped other teams with our learnings</li>
              </ul>
            </div>
            <div>
              <h4>Features</h4>
              <ul className="rem1">
                <li className="fragment">Drop Trailer Validation</li>
                <li className="fragment">Lane History</li>
                <li className="fragment">Agents</li>
                <li className="fragment">Tender Control</li>
                <li className="fragment">Load Documents</li>
                <li className="fragment">Security 360</li>
              </ul>
            </div>
          </div>
          <Note>
            component tests - more natural user behavior & test template functionality <br />
            Safety team, Personnel/PaydayPenPals team <br />
            Our devs have contributed to Carrier/RG angular updates and deployments <br />
            lane history - center screen featrue <br />
            tender Control - CMS retirement MIDAS
            <br />
          </Note>
        </Slide>
        <Slide>
          <h2>NX Architecture</h2>
          <div className="two-col col-top">
            <div>
              <h3>2023</h3>
              <ul className="rem1">
                <li className="fragment" data-fragment-index="1">
                  1 Application
                </li>
                <li className="fragment" data-fragment-index="3">
                  2 Pipelines
                </li>
                <li className="fragment" data-fragment-index="5">
                  7 Libs
                </li>
                <li className="fragment" data-fragment-index="7">
                  2 executors
                </li>
              </ul>
            </div>
            <div>
              <h3>2024</h3>
              <ul className="rem1">
                <li className="fragment" data-fragment-index="2">
                  3 Applications
                </li>
                <li className="fragment" data-fragment-index="4">
                  3 Pipelines
                </li>
                <li className="fragment" data-fragment-index="6">
                  90 Libs w/ module boundaries
                </li>
                <li className="fragment" data-fragment-index="8">
                  3 executors & 1 generator
                </li>
                <li className="fragment" data-fragment-index="9">
                  108 releases
                </li>
              </ul>
            </div>
          </div>
        </Slide>
        <Slide>
          <h2>Unofficial Goals</h2>
          <div className="three-col">
            <div className="fragment">
              <h4>Technical Debt</h4>
              <ul className="rem1">
                <li>OMS Code Migration</li>
                <li>More Toggles</li>
                <li>Load List Migration</li>
                <li>Models Lib</li>
                <li>Betterer</li>
              </ul>
            </div>
            <div className="fragment">
              <h4>Application Improvements</h4>
              <ul className="rem1">
                <li>More NX Libs</li>
                <li>Load List</li>
                <li>Bundle Sizes</li>
                <li>Doc Migrations</li>
                <li>Operation Shield Shenanigans</li>
              </ul>
            </div>
            <div className="fragment">
              <h4>New Features</h4>
              <ul className="rem1">
                <li>DS18</li>
                <li>Security 360 and beyond</li>
                <li>Sharing and Splits</li>
                <li>System Triggers</li>
              </ul>
            </div>
          </div>
          <Note>
            no accountability or approval of these goals <br />
            Beyond means contributing to main libs <br />
            Shield - More BE and FE collaboration
          </Note>
        </Slide>
        <Slide>
          <h2>Book Recommendation</h2>

          <img src={Egg} alt="" style={{ width: 350 }} />
          <Note>
            cybersecurity first principles <br />
            It is his first-person account of the hunt for a computer hacker who broke into a computer at the Lawrence Berkeley National
            Laboratory
          </Note>
        </Slide>
      </LayoutDeck>
    </>
  );
};

export default Providers;
