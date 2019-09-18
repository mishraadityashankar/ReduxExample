import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNumber} from  '../actions/basicAction'
class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          Description: ''
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const newItem = {
          title: this.state.title,
          Description: this.state.Description
        };
    
        this.props.addNumber(newItem);
      }
    
      render() {
        return (
          <div>
            <h1>Add Item</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Title: </label>
                <br />
                <input
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>
              <br />
              <div>
                <label>Description: </label>
                <br />
                <textarea
                  name="Description"
                  onChange={this.onChange}
                  value={this.state.Description}
                />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            addNumber: (item) => {
                dispatch(addNumber(item));
            }
        };
    };
    
export default connect(null,mapDispatchToProps)(AddItem);