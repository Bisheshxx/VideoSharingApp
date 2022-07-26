import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResult from "../components/NoResult";

interface IProps {
  videos: Video[];
}
const Home = ({ videos }: IProps) => {
  return (
    <div className="flex flex-col gap-10 video h-full">
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id}></VideoCard>
        ))
      ) : (
        <NoResult text={"No Result"} />
      )}
    </div>
  );
};
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);
  console.log(data);
  return {
    props: {
      videos: data,
    },
  };
};
export default Home;
