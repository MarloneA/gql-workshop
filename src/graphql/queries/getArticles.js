import gql from 'graphql-tag';

const GET_ARTICLES = gql`{
    articles{
        id
        title
        content
        category {
            name
            description
        }
    }
}`

export default GET_ARTICLES;