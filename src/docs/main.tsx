import React from 'react'
import { createRoot } from 'react-dom/client';
import "tuicss"
import "../lib/style.css"
import TuiDivider from '../components/TuiDivider'
import { Background } from '../types/enums'
import TuiBackground from '../components/TuiBackground'
import Bios from './Bios'
import Buttons from './Buttons'
import Charts from './Charts';
import Codes from './Codes'
import Forecast from './Forecast';
import Inputs from './Inputs';
import Modals from './Modals';
import Navigation from './Navigation';
import Layout from './Layout'
import TuiGrid from "../composites/TuiGrid"
import Table from "./Table"

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
<React.StrictMode>
  <TuiBackground color={Background.BlueWhite}>
    <TuiGrid.Container>
      <h1 className="center" aria-label="React TUI">
        ===========react-tuicss===========
      </h1>
      <Buttons />
      <TuiDivider />
      <Codes />
      <TuiDivider />
      <Charts />
      <TuiDivider />
      <Inputs />
      <TuiDivider />
      <h2 className="center">Pages</h2>
      <h3>Bios</h3>
      <Bios />
      <Modals />
      <h3>Forecast</h3>
      <Forecast />
      <Navigation />
      <Layout />
      <Table />

    </TuiGrid.Container>
  </TuiBackground>
</React.StrictMode>
);