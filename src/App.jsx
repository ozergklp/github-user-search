import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
} from 'react-router-dom'
import {  useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main, { handleSearchLoader } from './components/Main';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header/>} >
        <Route  path="/:username" 
                element={<Main/> }  
                loader={handleSearchLoader}
                />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />

  );
}

export default App;

