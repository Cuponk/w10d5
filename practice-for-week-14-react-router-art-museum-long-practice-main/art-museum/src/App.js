import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GallerryNavigation";
import {Route, Switch, Redirect} from 'react-router-dom';

function App() {
  const {records} = harvardArt
  // console.log(records)
  return (
    <>
    <Route path='/' component={GalleryNavigation}/>
    
    <GalleryNavigation galleries={records}/>
    </>
  );
}

export default App;
