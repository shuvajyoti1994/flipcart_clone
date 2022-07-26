import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home';

import { Box } from '@mui/material'

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{margin:55}}>
        <Home />
      </Box>

    </div>
  );
}

export default App;
