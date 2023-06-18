import React, { useState } from 'react';
import { Wrapper } from './AddVideo.styles';

import { db, auth } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function AddVideo() {
  const [title, setTitle] = useState("");
  const [thumbNail, setThumbNail] = useState("");
  const [description, setDescription] = useState("");

  const videoCollectionRef = collection(db, "videos");

  const onSubmitVideo = async () => {
    const user = auth.currentUser;
    const authorName = user.displayName;
    const authorID = user.uid;

    try {
      await addDoc(videoCollectionRef, {
        title: title,
        thumbnail: thumbNail,
        description: description,
        author: authorName,
        authorID: authorID,
        date: ["18", "06", "2023"],
        likes: 0,
        views: 0,
        comments: null
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Wrapper>
      <form>
        <input type="text"
          name="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text"
          name="thumbnail"
          placeholder="thumbnail"
          onChange={(e) => setThumbNail(e.target.value)}
        />
        <input type="text"
          name="description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={onSubmitVideo}>Enviar vídeo</button>
      </form>
    </Wrapper>
  )
}
