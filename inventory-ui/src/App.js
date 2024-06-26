import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { React, useState, createContext } from 'react';
import HomeBar from './HomeBar';
import Login from './Login';
import Items from './Items';
import Item from './Item';
import CreateItem from './CreateItem';
import Register from './Register';

export const AuthContext = createContext();

function App() {

  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Router>
        <Routes>
          <Route path='/' element={<HomeBar />} >
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/items' element={<Items type='all'/>} key='allItems'/>
            <Route path='/items/:id' element={<Item/>} />
            <Route path='/createItem' element={<CreateItem/>} />
            <Route path='/myItems' element={<Items type='user'/>} key='myItems'/>
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
