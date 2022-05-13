import React from 'react'
import './Style/DownloadBtn.css'



export default function App(props) {
  const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="down-btn-container">
      <a
        href={props.url}
        download
        onClick={e => download(e)}
      >
        <button id='down-btn'>download</button> 
      </a>
    </div>
  );
}