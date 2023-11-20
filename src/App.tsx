
import { useEffect, useState } from 'react'
import './App.css'
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

function App() {

  const [link, setLink] = useState("")
  const [name, setName] = useState("")
  const [generateClicked, setGenerateClicked] = useState(false)

  const [isValid, setIsValid] = useState(false)

  useEffect(() => {

    setGenerateClicked(false)

    if(link !== "" && name !== "") {
      setIsValid(true)
    } else {
      setIsValid(false)
    }

  },[link, name])


  const handleGenerate = () => {
    setGenerateClicked(true) 
  }

  const handleDownload = () => {
    const contentDiv = document.getElementById('downloadable-content');

    if (contentDiv) {
      html2canvas(contentDiv).then((canvas) => {
        const image = canvas.toDataURL('image/png');

        const a = document.createElement('a');
        a.href = image;
        a.download = `${name}.png`;
        a.click();
      });
    }
  }


  return (
    
    <div className='w-full flex justify-center items-center flex-col'> 

<div className="w-screen h-screen flex justify-center items-center flex-col bg-gradient-to-br from-sky-700 to-lime-700">
      <div className='w-5/6 md:w-1/2 flex flex-col  justify-center items-center gap-2 my-2 '>
        <h1 className='font-RobotoBlack text-2xl text-white'>QR Code Generator</h1>
      </div>
      
      <div className='w-5/6 md:w-1/3 flex flex-col gap-2'>
      <div className="relative flex gap-3 flex-col">
        
        <input type="search" onChange={(e) => setLink(e.target.value)}  className="block w-full p-2 h-[50px] font-RobotoRegular pl-10 text-base text-black border border-gray-300 rounded-lg " placeholder="Enter or Paste Link" required/>
        <input type="text" onChange={(e) => setName(e.target.value)} className="block w-full p-2 h-[50px] font-RobotoRegular pl-10 text-base text-black border border-gray-300 rounded-lg " placeholder="Enter Name" required/>
    </div>
      </div>

      <div className='w-5/6 md:w-1/3 flex flex-col gap-2'>
          <div className='flex justify-end mt-5'>
              <button type="button" onClick={handleGenerate} disabled={isValid ? false : true} className={isValid? `text-white font-RobotoMedium bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium 
              rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
              focus:outline-none dark:focus:ring-blue-800`: `text-white font-RobotoMedium bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium 
              rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 
              focus:outline-none dark:focus:ring-gray-800`} >
                Generate
                </button>
        </div>
      </div>

  {generateClicked ?  <div className='w-1/2 md:w-1/2 flex flex-col justify-center items-center mt-2' >
        <div className='flex justify-center items-center  px-3  flex-col bg-white' id='downloadable-content'>
          <h1 className='self-start py-2 font-RobotoRegular'><strong className='font-RobotoRegular'>Title:</strong>&nbsp; {name}</h1>
            <QRCode size={220} className='p-5' value={link} />
            <h1 className='py-4 flex self-end text-[10px] font-RobotoRegular text-red-500'>powered by: vjbano</h1>
        </div>

        
      <button onClick={handleDownload} type="button" className=" mt-3 text-white bg-gradient-to-r font-RobotoMedium from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        Download
        </button> 
      
      </div>: null }
    </div>
      
    </div>
  
  )
}

export default App
