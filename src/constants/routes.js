const HOOKS_ROOT_ROUTE = 'hooks';
const RENDERING_ROOT_ROUTE = 'rendering';
const APIS_ROOT_ROUTE = 'apis';

// eslint-disable-next-line import/no-anonymous-default-export
export default Object.freeze({
  hooks: {
    useState: `${HOOKS_ROOT_ROUTE}/useState`,
    useEffect: `${HOOKS_ROOT_ROUTE}/useEffect`,
    useReducer: `${HOOKS_ROOT_ROUTE}/useReducer`,
  },
  rendering: {
    conditional: `${RENDERING_ROOT_ROUTE}/conditional`,
    loop: `${RENDERING_ROOT_ROUTE}/loop`,
  },
  apis: {
    fetching: `${APIS_ROOT_ROUTE}/fetching`,
  },
});
