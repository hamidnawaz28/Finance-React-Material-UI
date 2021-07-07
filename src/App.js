import React from "react"
import { Typography} from '@material-ui/core'
import {Drawer} from './components/drawer'
import { Timeline } from './components/timeline'
function App() {
  return (
    <>
      <Drawer>

        <Timeline/>
      </Drawer>
    </>
  )
}

export default App;
