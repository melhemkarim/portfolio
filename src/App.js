import React from 'react';

import { Header,Skills,Projects,Contact} from './container';
import { Navbar,Footer} from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';


const App = () => (
  <div>
    <Navbar/>
    <Header />
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
  
);

export default App;
