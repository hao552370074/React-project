import React, { Component } from 'react'

class Movie extends Component {
  constructor(props){
    super(props);
    this.state={}
}
  render(){
    console.log(this,'看这里');
   return (
     <div>这里是电影
        <br></br>
        路由:{this.props.match.params.type}-{this.props.match.params.id}
     </div>
   )
 }
}

export default Movie
