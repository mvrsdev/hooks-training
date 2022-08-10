import { Link } from 'react-router-dom';
import { routes } from '../constants';

export const WelcomePage = () => {
  return (
    <>
      <h1>Welcome to the React Training</h1>
      <h2>Hooks training</h2>
      <ul>
        <li>
          <Link to={routes.hooks.useState}>useState training</Link>
        </li>
        <li>
          <Link to={routes.hooks.useReducer}>useReducer training</Link>
        </li>
        <li>
          <Link to={routes.hooks.useEffect}>useEffect training</Link>
        </li>
      </ul>
      <h2>Looping and conditional rendering</h2>
      <ul>
        <li>
          <Link to={routes.rendering.conditional}>
            Conditional rendering (How to show or hide a component)
          </Link>
        </li>
        <li>
          <Link to={routes.rendering.loop}>
            Looping rendering (How to render a list)
          </Link>
        </li>
      </ul>
      <h2>API call</h2>
      <ul>
        <li>
          <Link to={routes.apis.fetching}>
            Fetching data (How to fetch data from a server)
          </Link>
        </li>
      </ul>
    </>
  );
};
