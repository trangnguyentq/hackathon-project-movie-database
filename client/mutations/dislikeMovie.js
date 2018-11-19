import gql from 'graphql-tag';


export default gql`
  mutation dislikeMovie($id: ID) {
    dislikeMovie(id: $id) {
      id
      dislikes
    }
  }
`;