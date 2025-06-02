import { useEffect, useState } from "react";
import "../styles/Gallery.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [photos, setPhotos] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dominion Taxidermy | Gallery";
    window.scrollTo(0, 0);

    if(!photos) {
      fetchPhotos()
    }
  }, [photos]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(`https://dominion-server-4490ee5fc0ce.herokuapp.com/all-dominion-photos`);
  
      setPhotos(response.data)
    } catch(err) {
      console.log(err)
    }
  }

  const renderPhotos = () => {
    return photos.map(photo => {
      return (
        <div id={photo.photo_id} key={photo.photo_id} className="col" onClick={() => navigate(`/gallery/${photo.photo_id}`)}>
          <img className="gallery-single-image" src={photo.url} alt="" />
        </div>
      )
    })
  }

  return photos ? (
    <div id="gallery-page">
      <div className="row" id="gallery">
        {renderPhotos()}
      </div>
    </div>
  ) : (
    <div id="gallery">
      <img id="loading" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif" width="250px" alt="" />
    </div>
  )
}

export default Gallery;