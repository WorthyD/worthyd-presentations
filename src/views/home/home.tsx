import { NavLink } from 'react-router-dom';
import './home.scss';
const Home = () => (
  <section className="slide-collection">
    <h1>Welcome to a completely unstyled page. Click a link and go to a presentation</h1>
    <div className="presentation-list">
      <ul>
        {/* <li>
          <NavLink to="/revunit/ui">UI libraries</NavLink> - Old UI Library talk for RevUnit
        </li> */}

        <li>
          <NavLink to="/jbh/books">Book Review</NavLink> - Massive list of books developers should read.
        </li>
        <li>
          <NavLink to="/skillup/providers">I Can Provide That</NavLink> - SkillUp Provider presentation
        </li>
        <li>
          <NavLink to="/jbh/demo">Sprint Demo</NavLink> - Sprint Demos
        </li>
        {/* <li>
          <NavLink to="/jbh/2024-review">2024 Review</NavLink>
        </li> */}

        <li>
          <NavLink to="/skillup/skill-up-book-review">Book Review</NavLink> - SkillUp Book presentation
          <NavLink to="/book-list">Book list</NavLink>
        </li>
      </ul>
    </div>
  </section>
);

export default Home;
