import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModelPage2 from './pages/model_page_2';
import SizePage3 from './pages/size_page_3';
import BackgroundPage5 from './pages/background_page_5';
import BurnerPage8 from './pages/burner_page_8';
import MediaPage12 from './pages/media_page_12';
import RoomScenePage21 from './pages/room_scene_page_21';
import TurnMeOnPage22 from './pages/turn_me_on_page_22';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ModelPage2 />} />
        <Route path='/size' element={<SizePage3 />} />
        <Route path='/background' element={<BackgroundPage5 />} />
        <Route path='/burner' element={<BurnerPage8 />} />
        <Route path='/media' element={<MediaPage12 />} />
        <Route path='/room' element={<RoomScenePage21 />} />
        <Route path='/turn' element={<TurnMeOnPage22 />} />

      </Routes>
    </Router>
  );
}
