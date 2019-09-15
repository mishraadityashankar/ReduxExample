import React, { Component } from 'react';
import {connect} from 'react-redux';
class ShowList extends Component {
    render() {

        console.log(this.props)

        const {list}=this.props;
        const listitem= list.length ? 
        (list.map(item=>{
                return (
                
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.Description}</p>
                        
                        <hr/>
                    </div>
                )
              }
               
         )):(
           <div>No item present</div>
         )
    return(
       <div>
           <h1>Item List</h1>
           <hr></hr>
           {listitem}
       </div>
    )
 }
}
const mapStateToProps=(state) =>{
    return {list : state.list}

}

export default connect(mapStateToProps)(ShowList);