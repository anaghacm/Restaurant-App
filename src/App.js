import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vierestaurant from './components/Vierestaurant';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />
          {/* <h4>Restaurant Application</h4> */}
          <Routes>
            <Route path='/' element={<Restaurantlist />}/>
            <Route path='/viewrestaurant/:id' element={<Vierestaurant/>}/>
          </Routes>
          <Footer />
        </header>
      </Router>
    </div>
  );
}

export default App;
