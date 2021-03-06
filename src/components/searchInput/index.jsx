import React, {Component} from 'react';
import './searchInp.css'

class SearchInp extends Component {

  // 子组件触发input焦点事件，直行父组件
  handleOnFocus = () => {
    // console.log('子组件触发了函数');
    this.props.onFocus && this.props.onFocus();
  };

  // 子组件 onChange 事件
  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e);
  };

  // 失去焦点事件
  handleOnBlur = () => {
    this.props.onBlur && this.props.onBlur();
  };

  render() {
    return (
      <div className={'ho_input_wrap flex-one flex flex-item'}>
        <input className={'flex-one'} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onChange={this.handleChange} defaultValue={this.props.searchValue} type="text" placeholder={'搜点感兴趣的......'}/>
        <i className={'p_icon iconfont iconsousuo'}></i>
    </div>
    );
  }
}

export default SearchInp;
