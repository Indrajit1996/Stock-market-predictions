import React from 'react';
import logo from './logo.svg';
// import './App.css';
import MyStockChart from './MyStockChart.jsx'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import Zoom from 'react-reveal/Zoom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        
        <div>
            <MyStockChart />
            
          </div>
      
          
        <Zoom>
          <p>Markup that will be revealed on scroll</p>
        </Zoom>
      </header>
    </div>
  );
}

export default App;
