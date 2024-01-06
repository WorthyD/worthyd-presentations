import { NavLink } from 'react-router-dom';
const Home = () => (
    <section>
        <NavLink to="/ui">
            UI
        </NavLink>
        <NavLink to="/books">
        books
        </NavLink>
 
    </section>
);

export default Home;
