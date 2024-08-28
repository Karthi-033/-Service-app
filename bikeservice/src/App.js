//import react from'react';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Apply from'./Apply';
import First from './First';
import View from './View';
import Owner from './Owner';
function App(){

    return(
<>
<BrowserRouter>
<Routes>
    <Route path='/'element={<First/>}/>
    <Route path='/apply'element={<Apply/>}/>
    <Route path='/view'element={<View/>}/>
    <Route path='/Owner'element={<Owner/>}/>
</Routes>
</BrowserRouter>
</>
    );
}
export default App;