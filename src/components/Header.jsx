import React from 'react';
import './Header.less';
import {  GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'DrawReferenceLine'
    };
  }
  toGithub() {
    // 打开新页签
    window.open('https://github.com/Alwayfeels/drawReferenceLine', '_blank');
  }
  uploadImage() {
    // this.props.
  }
  render() {
    return (
      <header className="header flex items-center"> 
        <div className='text-xl bold mr-auto'>{this.state.title}</div>
        <Button onClick={this.uploadImage}>上传图片</Button>
        <GithubOutlined className='big-icon ml-4 cursor-pointer items-end' onClick={this.toGithub}/>
      </header>
    );
  }
  
}
export default Header;