import Head from 'next/head';
import { Heading } from '../components/Heading';

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Post List" />
    </div>
  );
};

export default Posts;
