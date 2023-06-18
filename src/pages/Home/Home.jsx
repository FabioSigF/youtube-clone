import React, { useEffect, useState } from 'react'

import './Home.styles'
import Video from '../../components/VideoCard/VideoCard'
import { Wrapper } from './Home.styles'

import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

export default function Home() {
  
  const [videoList, setVideoList] = useState([]);

  const videosCollectionRef = collection(db, "videos")
  const getVideoList = async() => {
    try {
      const data = await getDocs(videosCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setVideoList(filteredData);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getVideoList();
  }, [videoList]);

  return (
    <Wrapper>
      <ul>
        {videoList.map((video) => (
          <li>
            <Video data={video} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
