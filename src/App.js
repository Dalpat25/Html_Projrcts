// import logo from './logo.svg';
import './App.css';
import CSVReader from 'react-csv-reader';
import { useRef } from 'react'; // Import useRef from 'react'

function App() {
  const buttonRef = useRef(null);

  const handleOnFileLoad = (data) => {
    console.log(data);
  };

  const onErrorHandler = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handlefileRemove = (data) =>{
    console.log(data)
  }

  return (
    <>
      <h2>HELLO</h2>
      <CSVReader
        ref={buttonRef}
        onFileLoaded={handleOnFileLoad}
        onError={onErrorHandler}
        onclick
        noDrag
        onremovefile={handlefileRemove}
      >
        {({file}) => (
          <flex margin = "10">
            <button>CSV upload</button>
          </flex>
        )}
      </CSVReader>
    </>
  );
}

export default App;
