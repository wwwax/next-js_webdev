import { Heading } from '@/components/Heading';
import styles from '@/styles/Home.module.scss';
import Head from 'next/head';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home" />
    </div>
  );
};

export default Home;
