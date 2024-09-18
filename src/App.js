import { useEffect, useState } from 'react';
import './App.css';
import AlbumsList from './AlbumsList';
import Album from './Album';


function App() {

  const [datas, setDatas] = useState([])
  const [selectedAlbum,setSelectedAlbum] = useState(null)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(res => setDatas(res))
    .catch(err => console.log(err))
  },[])
  const albumIds = [...new Set(datas.map(data => data.albumId))]
  


  return (
    <div className="App">
      <h1>Photo Albums</h1>
      <AlbumsList albumIds={albumIds} setSelectedAlbum={setSelectedAlbum} />
      {selectedAlbum && (
        <Album selectedAlbum={selectedAlbum} datas={datas}/>
      )}
    </div>
   
  );
}

export default App;
