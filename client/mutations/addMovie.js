import gql from 'graphql-tag';

export default gql`
    mutation AddMovie($title: String, $description: String, $poster: String){
        addMovie(title: $title, description: $description, poster: $poster) {
          title
          description
          poster
        }
    }
`;