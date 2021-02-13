import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
    }

    //e?????The e is the argument of an event handler you attach to a 
    //certain event on a certain component... in this case the onFilterTextInput event. 
    //Events are objects with certain properties, and e.target almost always represents a DOM element.
    //Thus e.target.value is the value property of some DOM element,
    onChange(e) {
        //[] ?????  This is to dynamically update object property 
        //(when the name of the property is unknown upfront but runtime). 
        //This way you could have multiple React inputs having a different 
        //name property and using the same onChange handler to update part of the state.
        //computed property
        this.setState({[e.target.name]: e.target.value}); 
    }

    onSubmit(e) {
        e.preventDefault(); // preventDefault ??????
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        //console.log(post); 
        //call action
        this.props.createPost(post);

        
    }
    
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        );
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform);