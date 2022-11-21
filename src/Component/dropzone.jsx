import React from 'react';
import {useDropzone} from 'react-dropzone';

function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container d-flex justify-content-center align-items-end bg-white p-5 border rounded-3 mb-4 col-6">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p><i class="bi bi-plus-lg fs-1"></i></p>
        <ul>{files}</ul>
      </div>
      
    </section>
  );
}

<Basic />
export default Basic;