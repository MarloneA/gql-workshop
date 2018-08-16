import gql from 'graphql-tag';

const EDIT_ARTICLE = gql`
    mutation($articleId: ID!, $title: String! , $content: String!) {
        editArticle(
            articleId: $articleId,
            title: $title,
            content: $content
        ){
            article{
                id
                title
                content
            }
        }
    }
`

export default EDIT_ARTICLE;

