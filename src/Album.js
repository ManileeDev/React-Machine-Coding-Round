import React, { useState } from 'react'

const Album = ({selectedAlbum,datas}) => {
    const [selectedPhoto,setSelectedPhoto] = useState(null)
    console.log(selectedPhoto)
    return (
        <div>
            <h2>Album {selectedAlbum}</h2>
            <div className='albums'>{datas.filter(data => data.albumId === selectedAlbum).map(photo => (
                <div key={photo.id} >
                    <a href={photo.url} target='blank'><img src={photo.thumbnailUrl} alt={photo.title} onClick={() => setSelectedPhoto(photo)} /></a>
                </div>))}</div>
        </div>
    )
}

export default Album