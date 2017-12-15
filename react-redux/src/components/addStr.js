import React,{Component} from 'react'
import { connect } from 'react-redux';
import '../styles/home.css';
class AddStr extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {cartData,addCartData}= this.props;
    return(
      <div>
        <ul>
          {
            cartData.map((item,index)=>{
               return <li key={index}>{item}</li>
            })
          }
        </ul>
        <button onClick={()=>addCartData()}>点击</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state.cartReducer.cartData);
  return{
    cartData:state.cartReducer.cartData
  }
}
function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  return{
    addCartData:()=>dispatch({type:'ADD2'})
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStr);

