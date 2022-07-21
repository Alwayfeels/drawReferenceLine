import React from 'react'; 
import { Button } from 'antd';
import './CanvasView.less';

class CanvasView extends React.Component {
  constructor(props) {
    super(props);
    // 获取当前窗口的宽高
    const { innerWidth: width, innerHeight: height } = window;
    this.state = {
      canvasWidth: innerWidth,
      canvasHeight: innerHeight - 100,
    };
  } 
  uploadImage() {
    console.log('this.state', this.state)
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.getElementById('canvas');
          canvas.width = this.state.canvasWidth;
          canvas.height = this.state.canvasHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/png');
          console.log(dataURL);
        }
      }
    }
    input.click();
  }
  render() {
    return (
      <section className="flex flex-col canvas-view">
        <Button onClick={() => this.uploadImage()}>上传图片</Button>
        <canvas id="canvas" width={this.state.canvasWidth} height={this.state.canvasHeight}></canvas>
      </section>
    );
  }
  
}
export default CanvasView;