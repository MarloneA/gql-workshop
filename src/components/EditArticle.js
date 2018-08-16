import React, { Component } from 'react';
import {notify} from 'react-notify-toast';
import EDIT_ARTICLE from '../graphql/mutations/editArticle';
import {graphql} from 'react-apollo';


class EditArticle extends Component{
    state = {
        title: '',
        content: ''
    }

    handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        this.setState({
            [name]:value
        });
    }

    handleSubmit = e =>{
        e.preventDefault();
        const { title, content } = this.state;

        console.log(title, content, this.props.id)

        this.props.editArticle({ 
                variables: {
                    articleId: this.props.id,
                    title: title, 
                    content: content
                }
            }).then(res => {
                notify.show('Article edited successfully', 'success', 4000);
                }).catch(error => {
                    console.log(error)
                }
                )
    }
        
    render() {
        const { title, content } = this.state;
        const { id } = this.props;
    return (
        <div>
            <button class="btn btn-primary btn-sm" data-toggle="modal" data-target={ `#edit${this.props.id}` }>
                Edit {id}
            </button>

            <div class="modal fade" id={`edit${this.props.id}`} tabindex="-1" role="dialog" 
                aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">       
                        <form onSubmit={this.handleSubmit}>
                            <h3>Edit Article {this.props.id}</h3><br/>
                            <div>
                                <label>Title</label><br/>
                                <input name="title" type="text" value={title} onChange={this.handleChange}/>
                            </div><br/>
                            <div>
                                <label>Content</label><br/>
                                <input name="content" type="text" value={content} onChange={this.handleChange}/>
                            </div><br/>
                            <button  className="btn btn-primary" type="submit">Edit</button>
                        </form>
                        
            
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default"
                                    data-dismiss="modal">
                                        Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
};

export default  graphql(EDIT_ARTICLE, { name: 'editArticle' })(EditArticle);



  