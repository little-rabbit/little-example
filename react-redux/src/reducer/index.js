import {combineReducers} from 'redux';
import {ADD,ADD1,ADD2} from '../action';
const initialState = {
  listData:["列表一","列表二","列表三"],
  cartData:["1","2","3"]
};
const listReducer=(state = initialState,action)=>{
  switch (action.type){
    case ADD:
      // console.log(action.payload);
      state.listData.push(action.payload);
      return {listData:state.listData};
    default:
      return state;
  }
};
const cartReducer=(state=initialState,action)=>{
  state = JSON.parse(JSON.stringify(state));//深拷贝数据
  switch (action.type){
    case ADD1:
      // console.log(action.payload);
      state.cartData.push(222);
      return {cartData:state.cartData};
      break;
    case ADD2:
      // console.log(action.payload);
      state.cartData.push('你好');
      return {cartData:state.cartData};
      break;
    default:
      return state;
  }
};
const reducer = combineReducers({
  listReducer,
  cartReducer
});
export default reducer;
