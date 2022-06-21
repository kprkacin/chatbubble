import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Avatar } from './components/Avatar/Avatar';
import { ChatModal } from './components/ChatModal/ChatModal';

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to chat
        </a>
        <Avatar
          onClick = {()=>setOpen((old)=>{return !old})}
        />
        <ChatModal
        open = {open}
        setOpen = {setOpen}
        />
      </header>
    </div>
  );
}

export default App;
