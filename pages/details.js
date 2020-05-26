import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container } from 'reactstrap';

const Details = ({ post }) => (
  <div>
      <Container>
        <Alert color="success">- - - DETAILS! - - - -</Alert>
        {post.title}
        {post.body}
      </Container>
  </div>
);

Details.getInitialProps = async () => {
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?id=${slug}'
  );

  return { dataPosts: res.data }
}

export default Details;