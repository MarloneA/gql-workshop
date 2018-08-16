import React from 'react';
import {graphql} from 'react-apollo';
import GET_ARTICLES from '../graphql/queries/getArticles';
import { Link } from 'react-router-dom';
import EditArticle from './EditArticle';

const Articles = props => {

    if (props.data.loading) return <p>Loading...</p>;
    if (props.data.error) return <p>Error :(</p>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th> 
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>       
            {props.data.articles.map(item => (
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.content}</td> 
                    <td><EditArticle id={item.id}/></td>
                    <td><Link to={'#'}><button>Delete</button></Link></td>
                </tr>
            ))}
            </tbody>
    </table>
    );   
}
    
export default graphql(GET_ARTICLES, { name: 'data' })(Articles);
  