import styled from 'styled-components';

const List = styled.li`
  border-bottom: 1px solid #e1e1e1;
  list-style: none;

  h3 {
    margin-top: 15px;
    font-size: 1.6rem;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  p {
    margin-bottom: 0;
  }

  a {
    padding: 0 10px 10px 0;
    text-decoration: none;
    color: #333;

    &:first-letter {
      text-transform: uppercase;
    }

    &:hover {
      color: #999;
    }
  }
`
export default List;