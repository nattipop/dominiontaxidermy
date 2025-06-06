/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"

const Photo = () => {
  const [photo, setPhoto] = useState();
  const navigate = useNavigate();
  const { photoId } = useParams();

  useEffect(() => {
    if(!photo) {
      fetchPhoto();
    }
  }, [photo]);

  const fetchPhoto = async () => {
    try {
      const response = await axios.get(`https://dominion-server-4490ee5fc0ce.herokuapp.com/dominion-photo-by-id/${photoId}`);
  
      setPhoto(response.data)
    } catch(err) {
      console.log(err)
    }
  }

  return photo ? (
    <div id="photo-page">
      <img id="full-image" src={photo.url} />
      <button id="back-button" onClick={() => navigate(-1)}>Back</button>
    </div>
  ) : (
    <div id="photo-page">
      <img id="loading" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif" width="200px" alt="" />
    </div>
  )
}

export default Photo;