import React, { useEffect, useState } from 'react'

//Styles
import { Main, Wrapper, VideoP, Description, ChannelInfo, ChannelAvatar, Bar, ChannelButtons, VideoButtons, VideoDescription, VideoDescriptionHeader, Comments, CommentsContainer, SideBar } from './Video.styles'

//Components
import ButtonSubscribe from '../../components/ButtonSubscribe/ButtonSubscribe'
import ButtonMember from '../../components/ButtonMember/ButtonMember'
import ButtonLike from '../../components/ButtonLike/ButtonLike'
import ButtonShare from '../../components/ButtonShare/ButtonShare'
import Comment from '../../components/Comment/Comment'
import VideoCardSecondary from '../../components/VideoCardSecondary/VideoCardSecondary'

//Aux functions
import { showSubscribers } from '../../auxiliar/showSubscribers'
import { showViews } from '../../auxiliar/showViews'

//Firebase
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'


export default function Video() {

  const data = {
    videoURL: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KjY94sAKLlw" title="Next.js React Framework Course – Build and Deploy a Full Stack App From scratch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>,
    title: "Next.js React Framework Course - Build and Deploy a Full Stack App From Scratch",
    channelAvatar: "https://yt3.ggpht.com/ytc/AGIKgqMl9TL4OpwS8Zc5jHrNnfO01f_Wbovye9mQzfp36Q=s48-c-k-c0x00ffffff-no-rj",
    channelName: "freeCodeCamp.org",
    channelSubscribers: 7087231,
    likes: 10212,
    views: 494321,
    date: ["10", "05", "2023"],
    description: "In this Next.js course for beginners, you will learn how to build a full-stack App from scratch. We'll also learn how to deploy the App using Vercel and to sync up GitHub with Vercel so we deploy the app automatically.",
    comments: [
      {
        userId: "fabio123",
        date: ["10", "05", "2023"],
        description: "Amazing tutorial! Just one thought, instead of wrapping the <a> tag with <Link> tag provided by nextJS, we could also replace <a> by <Link> it would give the same result and cleaner code.",
        likes: 38
      },
      {
        userId: "felipe_ff",
        date: ["12", "05", "2023"],
        description: "Amazing tutorial! Just one thought, instead of wrapping the <a> tag with <Link> tag provided by nextJS.",
        likes: 38
      },
      {
        userId: "isabella_sig",
        date: ["10", "06", "2023"],
        description: "We could also replace <a> by <Link> it would give the same result and cleaner code.",
        likes: 38
      }
    ]
  }

  const [videoList, setVideoList] = useState([]);

  const videosCollectionRef = collection(db, "videos")
  const getVideoList = async () => {
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
    console.log(videoList);
    getVideoList();
  }, [videoList]);

  return (
    <Wrapper>
      <Main>
        <VideoP>
          {data.videoURL}
        </VideoP>
        <Description>
          <h2>{data.title}</h2>
          <Bar>
            <ChannelInfo>
              <ChannelAvatar src={data.channelAvatar} />
              <div>
                <h3>{data.channelName}</h3>
                <p>{showSubscribers(data.channelSubscribers)}</p>
              </div>
              <ChannelButtons>
                <ButtonMember />
                <ButtonSubscribe />
              </ChannelButtons>
            </ChannelInfo>
            <VideoButtons>
              <ButtonLike />
              <ButtonShare />
            </VideoButtons>
          </Bar>
          <VideoDescription>
            <VideoDescriptionHeader>
              <span>{showViews(data.views)}</span>
              <span>{data.date[1]}</span>
            </VideoDescriptionHeader>
            <p>{data.description}</p>
          </VideoDescription>
        </Description>
        <CommentsContainer>
          <span>389 comentários</span>
          <Comments>
            {data.comments.map((comment, key) => (
              <Comment data={comment} key={key} />
            ))}
          </Comments>
        </CommentsContainer>
      </Main>
      <SideBar>
        <ul>
          <li>
            <VideoCardSecondary />
          </li>
          <li>
            <VideoCardSecondary />
          </li>
          <li>
            <VideoCardSecondary />
          </li>
          {/* {videoList.map((video) => (
            <li>
              <VideoCard data={video} />
            </li>
          ))} */}
        </ul>
      </SideBar>
    </Wrapper>
  )
}
