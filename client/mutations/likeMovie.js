import gql from 'graphql-tag';


export default gql`
  mutation LikeMovie($id: ID) {
    likeMovie(id: $id) {
      id
      likes
    }
  }
`;