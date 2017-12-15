import React, { Component } from 'react';
import '../styles/home.css';
import { connect } from 'react-redux';
class Home extends Component{
  constructor(props){
    super(props);
  };

  render(){
    const {cartData,addCartData}= this.props;
    return (
      <div>
        <ul>
          {
            cartData.map(function(item,index){
              return <li key={index}>{item}</li>
            })
          }
          {/*{cartData.map ((item, index) => {*/}
            {/*return <li key={index}>{item}</li>*/}
          {/*})}*/}
        </ul>
        <button onClick={()=>addCartData()}>点击一下</button>
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
    addCartData:()=>dispatch({type:'ADD1'})
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
// 返回当前组件给store，然后是store的数据更新，重新调用render渲染页面，改变页面已有的数据;

