import './App.css';
import { Viewer } from 'photo-sphere-viewer';
import styles from 'photo-sphere-viewer/dist/photo-sphere-viewer.css';

const viewer = new Viewer({
  container: document.querySelector('#viewer'),
  panorama: 'https://realtyprotech.com/public/images/object-interactive/427-121-object-interactive.jpg',
});

function App() {
  return (
    <div className="App" id="viewer">

    </div>
  );
}

export default App;
