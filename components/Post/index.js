import React from 'react';
import { Link } from '../../routes';
import List from './List';

const PostItem = ({ item }) => (
  <Link route='post' params={{ slug: item.id }}>
    <List>
      <h3>{item.title}</h3>
      <p><a href="#">{item.body}</a></p>
    </List>
  </Link>
)

export default PostItem;