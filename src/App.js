
import './App.css';
import React from 'react';
import img1 from './images/rocket.jpg';


document.body.style.backgroundColor = "#061B37";

function App() {
  return (
    <div className='text-center sm:text-left'>
    <div className="App">
      <header>
        <h6 className="texte text-slate-50">Add device</h6>
        <button className="mt-3 bg-transparent hover:bg-sky-600 text-sky-400 rounded-full w-24 h-24 border-2 border-sky-700 border-dotted">+</button>
        <h6 className="text">Please select a device to add</h6>

<div className="text-center sm:text-left">
         <img className="px-10 ml-2 mr-6 w-full h-60" src="./images/rocket.jpg" alt="rocket"></img>
</div>
        <br/><br/>

        <form action="Form">

<label className="text-lg mr-64 text-slate-500">Device Type</label><br/>
<input className=" mr-44 w-48 h-8 border-2 border-sky-900 p-2 border-solid bg-transparent text-slate-50 rounded placeholder-gray-400 placeholder-opacity-75" type="text" name="Device Name" placeholder='DSLR Camera'></input>
<br/><br/>
<label className="text-lg mr-64 text-slate-500">Device Video</label><br/>
<input className="mr-44 w-48 h-8 border-2 border-sky-900 p-2 border-solid bg-transparent text-slate-50 rounded placeholder-gray-400 placeholder-opacity-75" type="text" name="Name of camera" placeholder='USB-HDMI-Camera'></input>
<br/><br/>
<label className="text-lg mr-64 text-slate-500">Audio Device</label><br/>
 <input className=" mr-44 h-8 w-48 border-2 border-sky-900 p-2 border-solid bg-transparent rounded rounded placeholder-gray-400 placeholder-opacity-75" type="text" name="Audio device type" placeholder='Logitech microphone'></input> 
 
<br/><br/>

<button className="bg-sky-500 hover:bg-sky-600 text-slate-50 rounded-md w-36 p-2" type="submit">Add device</button>
<button className= "border-solid border-sky-900 border-2 ml-5 text-white-900 hover:bg-sky-600 rounded-md w-36 p-2 mx-1" type="submit">Cancel</button>







        </form>
       
      </header>
    </div>






    </div>
  );
}

export default App;
