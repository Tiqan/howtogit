import React from 'react'
import './App.css'

import About from './components/About/About'
import Download from './components/Download/Download'
import RepositoryCreation from './components/RepositoryCreation/RepositoryCreation'
import AddAndCommit from './components/AddAndCommit/AddAndCommit'
import PushingChanges from './components/PushingChanges/PushingChanges'
import Update from './components/Update/Update'
import Help from './components/Help/Help'

function App() {
  return (
    <div>
      <About/>
      <Download/>
      <RepositoryCreation/>
      <AddAndCommit/>
      <PushingChanges/>
      <Update/>
      <Help/>
    </div>
  )
}

export default App