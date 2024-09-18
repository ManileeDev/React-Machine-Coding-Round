import React from 'react'

const AlbumsList = ({albumIds,setSelectedAlbum}) => {

      const handleAlbumClick = (id) => {
        setSelectedAlbum(id)
      }
  return (
    <div>
        <h2>Albums</h2>
        <ul>
          {albumIds.map(albumId=>{
            return(<li key={albumId}><button style={{backgroundColor: "#33398a" , padding : "5px" , border : "none" , color: "white" ,}} onClick={()=>handleAlbumClick(albumId)}>Album {albumId}</button></li>)
          })}
        </ul>
      </div>
  )
}

export default AlbumsList