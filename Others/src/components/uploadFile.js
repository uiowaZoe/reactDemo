// /* eslint no-console:0 */

import React from 'react';
// import ReactDOM from 'react-dom';
import Upload from 'rc-upload';
import FileIcon from '../image/uploadfile.jpg';
// const style = `
//         .rc-upload-disabled {
//            opacity:0.5;
//         `;

class UploadFile extends React.Component {
  constructor(props) {

    super(props);
    this.percentage = 0;
    this.state = {
      state: 'stop',
      progress:0
    };
    this.uploaderProps = {
      action: '/upload.do',
      data: { a: 1, b: 2 },
      headers: {
        Authorization: 'xxxxxxx',
      },
      multiple: true,
      beforeUpload(file) {
        console.log('beforeUpload', file.name);
      },
      onStart: (file) => {
        console.log('onStart', file.name);
        // this.refs.inner.abort(file);
      },
      onSuccess(file) {
        console.log('onSuccess', file);
      },
      onProgress(step, file) {
        
        console.log('onProgress', Math.round(step.percent), file.name);
        return step.percent;
      },
      onError(err) {
        this.state = 'err';
      },
    };

  }

  render() {
    return (
    

      <div className='uploadBlock'>
      <div className='uploadTag'>Upload</div>
      <img src={FileIcon} className='icon-uploadfile'/>
        <div >
          <Upload
      {...this.uploaderProps}
            component="div"
            style={{ display: 'inline-block' }} >
            <a className='uploadLink'>Choose From File</a>
           
          </Upload>
           <div className='after-link'>or drag it here</div>
        </div>
        <div className='progress-bar-area'>
        <div id="progress-bar-container">
    <div class="progress-bar-child progress"></div>
    <div class="progress-bar-child shrinker timelapse"></div>
</div>
        </div>

    </div>);
  }
}

export default UploadFile;
// // ReactDOM.render(<Test/>, document.getElementById('__react-content'));
// 'use strict';

// import React from 'react';
// import FileUploadProgress  from 'react-fileupload-progress';


// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Default style</h3>
//         <FileUploadProgress key='ex1' url='http://localhost:3000/api/upload'
//           onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
//           onLoad={ (e, request) => {console.log('load', e, request);}}
//           onError={ (e, request) => {console.log('error', e, request);}}
//           onAbort={ (e, request) => {console.log('abort', e, request);}}
//           />
//       </div>
//     )
//   }
// };

// export default Test;