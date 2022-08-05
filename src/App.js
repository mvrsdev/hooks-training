import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  ConditionalRenderingPage,
  EffectHookPage,
  FetchingApiPage,
  LoopRenderingPage,
  ReducerHookPage,
  StateHookPage,
  WelcomePage,
} from './pages';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="hooks">
          <Route path="useState" element={<StateHookPage />} />
          <Route path="useEffect" element={<EffectHookPage />} />
          <Route path="useReducer" element={<ReducerHookPage />} />
        </Route>
        <Route path="rendering">
          <Route path="conditional" element={<ConditionalRenderingPage />} />
          <Route path="loop" element={<LoopRenderingPage />} />
        </Route>
        <Route path="apis">
          <Route path="fetching" element={<FetchingApiPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
