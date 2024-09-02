import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import AddPerson from './Pages/AddPerson';
import Pending from './Pages/Pending';
import View from './Pages/View';
import Refused from './Pages/Refused';
import Confirmed from './Pages/Confirmed';
import GetTotalComponent from './GetTotalContext';
const App = () => {
    return (
        <GetTotalComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/AddPerson' element={<AddPerson />} />
                    <Route path='/pending' element={<Pending />} />
                    <Route path='/view/:id' element={<View />} />
                    <Route path='/refused' element={<Refused />} />
                    <Route path='/confirmed' element={<Confirmed />} />
                </Routes>
            </Layout>
        </GetTotalComponent>
    );
}

export default App;