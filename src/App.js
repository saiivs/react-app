import './App.css';
import React, { useEffect } from 'react';

let charpstarARViewerStyle = {
  zIndex: 10,
  position: 'absolute',
  top: '2%',
  width: '75px',
  right: '5%',
  cursor: 'pointer',
  display: 'none'
};

function App() {
  useEffect(() => {
    if (!document.querySelector(`script[src="https://js.charpstar.net/Synsam/scripts/detect-device.js"]`)) {

     
      const script1 = document.createElement('script');
    script1.src = "https://js.charpstar.net/Synsam/scripts/detect-device.js";
    script1.defer = true;
    document.body.appendChild(script1);
  }
    const script2 = document.createElement('script');
    script2.type = "module";
    script2.src = "https://unpkg.com/@google/model-viewer@1.5.0/dist/model-viewer.js";
    document.body.appendChild(script2);

    return () => {
      // document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <div>
      <div className="container-fluid navContainer">
        <header className="py-3">
          <a href="/" className="">
            <img src="https://cdnx.charpstar.net/Charpstar-Logo.png" width="150px" alt="Logo" />
          </a>
        </header>
      </div>
      <div className="container-fluid mx-10 my-10 mainContainer">
        <div className="row">
          <div className="col-lg-7 col-sm-12 col-12 text-center mr-auto position-relative ViewerContainer">
            <img
              id="charpstarARViewer"
              style={charpstarARViewerStyle} // Use an object for inline styles
              src="https://cdnx.charpstar.net/AR-T.gif"
              data-articleid="82907"
              data-desktopqr
              data-vto
              data-floor
              data-language="en-gb"
              alt="AR Viewer"
            />
            <div className="model-viewer-wrapper">
              <model-viewer
                id="threeDViewer"
                reveal="auto"
                camera-controls
                environment-image="https://js.charpstar.net/VTO/assets/SynsamNewHDRI.hdr"
                src="https://synsam.charpstar.net/KTX/82907.glb"
              ></model-viewer>
            </div>
          </div>
          <div className="col-lg-5 text-lg-left text-center px-15 px-sm-3 configControlArea">
            <div className="textArea">
              <h3 className="mainTitle mt-lg-3" id="mainTitleID">
                Ray-BanChromance - Synsam
              </h3>
              <p>Demo and AR/3D Integration Helper</p>
            </div>
            <div className="advance-tab-button advance-tab-button-1 controlArea">
              <div className="mainCodeArea">
                <div className="mt-lg-2 mt-sm-1 mt-3">
                  Unique Article ID
                  <div className="codeAreaMain">
                    <pre id="usdzLink">82907</pre>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
