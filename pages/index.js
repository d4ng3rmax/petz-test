import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Container } from 'reactstrap';
import Head from 'next/head';

import PostItem from '../components/Post'

const Home = ({dataPosts}) => (
  <div>
      <Head>
        <title>Petz Frontend test</title>
        <meta name='robot' content='index/follow' />
        <meta name='description' content='Petz, Buddies, Dogs, Cats e Frontend' />
      </Head>

      <Container>
        <img src="../assets/petz.jpg" width="150" />
        <Alert color="success">Petz Frontend test</Alert>
        <ul>
          {dataPosts.map(p => <PostItem key={p.id} item={p} />)}
        </ul>
      </Container>
  </div>
);

Home.getInitialProps = async () => {
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return { dataPosts: res.data }
}

export default Home;