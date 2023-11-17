import React,{Component} from 'react'
import './css/body.css'
import ReactPlayer from 'react-player';
class Body extends Component{
constructor() {
  super();
  this.state={ count: 0}

}
increment =() =>{
this.setState({count: this.state.count+1})
}
decrement =() =>{
this.setState({count: this.state.count-1})
}
render(){
  return(
    <div>
      <ReactPlayer url={'https://www.youtube.com/watch?v=mNuhKUOD_A0'} controls/>
                    <p> An image is a visual representation of something. An image can be a two-dimensional (2D) representation, such as a drawing, painting, or photograph, or a three-dimensional (3D) object, such as a carving or sculpture.</p>
      <img src='https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_1280.jpg' alt="Description of the image" className='image' />
      <p>{this.state.count}</p>
      <button onMouseEnter={this.increment}>Increment</button>
      <button onClick={this.decrement}>decrement</button>

    </div>
  )
}
}
export default Body