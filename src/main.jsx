import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BoxMatch from './App_1/BoxMatch.jsx';
import MineGame from './App_2/MineGame.jsx';
import ReactExplorer from './App_3/ReactExplorer.jsx';
import CSSLayouts from './App4/CSSLayouts.jsx';
import FirstGridSite from './App4/GridSite1/FirstGridSite.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/App1",
    element: <BoxMatch/>,
  },
  {
    path: "/App2",
    element: <MineGame/>,
  },
  {
    path: "/App3",
    element: <ReactExplorer/>,
  },
  {
    path: "/App4",
    element: <CSSLayouts/>,
  },
  {
    path: "/App4/firstGrid",
    element: <FirstGridSite/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
