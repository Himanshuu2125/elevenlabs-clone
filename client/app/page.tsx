"use client";
import { useState } from "react";
import {Dropdown,PlayButton} from './dropdown';

export default function Home() {
  const [language, setLanguage] = useState("ENGLISH");
  const [selectedFeature, setSelectedFeature] = useState("TEXT TO SPEECH");
  return (
    <div className="flex items-center flex-col px-3">
      <div className="flex justify-around mt-2 items-center w-full">
        <div className="text-2xl p-2 font-w-c-b">IIElevenLabs</div>
        <div className="hidden lg:flex">
          <div className="px-2 font-w-r whitespace-nowrap hover:bg-[#e5e5e5] cursor-pointer rounded-2xl p-2">Creative Platform</div>
          <div className="px-2 font-w-r whitespace-nowrap hover:bg-[#e5e5e5] cursor-pointer rounded-2xl p-2">Agent Platform</div>
          <div className="px-2 font-w-r whitespace-nowrap hover:bg-[#e5e5e5] cursor-pointer rounded-2xl p-2">Developers</div>
          <div className="px-2 font-w-r whitespace-nowrap hover:bg-[#e5e5e5] cursor-pointer rounded-2xl p-2">Resources</div>
          <div className="px-2 font-w-r whitespace-nowrap hover:bg-[#e5e5e5] cursor-pointer rounded-2xl p-2">Enterprise</div>
          <div className="px-2 font-w-r whitespace-nowrap hover:bg-[#e5e5e5] cursor-pointer rounded-2xl p-2">Pricing</div>
        </div>
        <div>
          <button className="rounded-full px-3 py-1 font-w-m mx-1 whitespace-nowrap cursor-pointer hover:bg-[#e5e5e5]">Log In</button>
          <button className="bg-black py-1 px-3 ml-1 font-w-m text-white rounded-full whitespace-nowrap cursor-pointer hover:bg-[#6e6e6e]">Sign Up</button>

        </div>
      </div>
      <div className="mt-40 flex flex-col items-center text-center">
        <div className="text-6xl font-w-c">
          The most realistic voice AI platform
        </div>
        <div className="text-xl font-w-c mx-20 mt-5">
          AI voice models and products powering millions of developers, creators, and enterprises. From low-latency conversational agents to the leading AI voice generator for voiceovers and audiobooks.
        </div>
        <div className="flex m-10">
          <button className="bg-black py-2 px-5 mx-1 font-w-b text-white rounded-full whitespace-nowrap cursor-pointer hover:bg-[#6e6e6e]">SIGN UP</button>
          <button className="bg-[#f2f2f2] py-2 px-4 mx-1 font-w-b rounded-full whitespace-nowrap cursor-pointer hover:bg-[#e5e5e5]">CONTACT SALES</button>
        </div>
      </div>
      <div className="flex flex-col items-center max-w-full">
        <div className="flex overflow-x-auto flex-nowrap w-full hide-scrollbar">
          <div
            className={`flex items-center mx-1 px-3 py-2 border-[1px] rounded-xl font-w-b border-gray-300 cursor-pointer whitespace-nowrap hover:border-black ${
              selectedFeature === "TEXT TO SPEECH" ? "bg-[#f2f2f2]" : "bg-white text-[#6e6e6e]"
            }`}
            onClick={() => setSelectedFeature("TEXT TO SPEECH")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" fillRule="evenodd" d="M1.25 3.125c0-1.036.84-1.875 1.875-1.875h8.125c1.036 0 1.875.84 1.875 1.875v3.766a.625.625 0 1 1-1.25 0V3.125a.625.625 0 0 0-.625-.625H3.125a.625.625 0 0 0-.625.625v8.125c0 .345.28.625.625.625h3.75a.625.625 0 1 1 0 1.25h-3.75A1.875 1.875 0 0 1 1.25 11.25z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M6.555 5.625H5.313A.31.31 0 0 1 5 5.313v-.625c0-.173.14-.313.313-.313h3.75c.172 0 .312.14.312.313v.625c0 .172-.14.312-.312.312H7.805v3.438c0 .172-.14.312-.313.312h-.625a.31.31 0 0 1-.312-.312zM15.323 7.016a.625.625 0 0 1 .88.088 8.5 8.5 0 0 1 1.922 5.396 8.5 8.5 0 0 1-1.923 5.396.625.625 0 0 1-.967-.792 7.24 7.24 0 0 0 1.64-4.604 7.24 7.24 0 0 0-1.64-4.604.625.625 0 0 1 .088-.88" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M13.292 8.329a.625.625 0 0 1 .88.088 6.43 6.43 0 0 1 1.453 4.083c0 1.55-.546 2.973-1.454 4.083a.625.625 0 0 1-.967-.791 5.18 5.18 0 0 0 1.171-3.292c0-1.252-.44-2.398-1.171-3.292a.625.625 0 0 1 .088-.88" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M11.23 9.547a.625.625 0 0 1 .88.09 4.52 4.52 0 0 1 1.015 2.863 4.52 4.52 0 0 1-1.015 2.864.625.625 0 1 1-.97-.79 3.27 3.27 0 0 0 .735-2.074 3.27 3.27 0 0 0-.735-2.074.625.625 0 0 1 .09-.88M9.201 10.858a.625.625 0 0 1 .879.093c.341.422.545.963.545 1.549a2.46 2.46 0 0 1-.545 1.549.625.625 0 0 1-.972-.785 1.2 1.2 0 0 0 .267-.764 1.2 1.2 0 0 0-.267-.764.625.625 0 0 1 .093-.879" clipRule="evenodd"></path></svg>
            <div className='ml-2'>TEXT TO SPEECH</div>
          </div>
          <div
            className={`flex items-center mx-1 px-3 py-2 border-[1px] rounded-xl font-w-b border-gray-300 cursor-pointer whitespace-nowrap hover:border-black ${
              selectedFeature === "AGENTS" ? "bg-[#f2f2f2]" : "bg-white text-[#6e6e6e]"
            }`}
            onClick={() => setSelectedFeature("AGENTS")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" fillRule="evenodd" d="M11.55 16.056a6.3 6.3 0 0 1-1.55.194 6.22 6.22 0 0 1-3.885-1.354c.804-.15 1.54-.456 2.224-.843.75.611 1.539 1.197 2.343 1.619.282.148.572.279.869.384M13.75 15a.6.6 0 0 0-.146.017c-.715.172-1.484-.002-2.342-.452-.597-.313-1.201-.741-1.817-1.227a30 30 0 0 0 1.589-1.256l.038-.031c1.728-1.43 3.226-2.65 5.149-2.663q.029.303.029.612a6.24 6.24 0 0 1-2.5 5m2.22-6.855c-2.275.111-4.024 1.559-5.588 2.854l-.107.088c-.625.518-1.226 1.01-1.834 1.427l-.371-.315c-.711-.603-1.436-1.219-2.137-1.708-.68-.475-1.409-.886-2.159-1.045A6.25 6.25 0 0 1 15.97 8.145m-12.176 2.6c.42.14.892.4 1.423.77.648.453 1.313 1.017 2.018 1.615l.068.058c-.719.35-1.471.562-2.303.562a6.2 6.2 0 0 1-1.206-3.005M2.5 10a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0" clipRule="evenodd"></path></svg>
            <div className='ml-2'>AGENTS</div>
          </div>
          <div
            className={`flex items-center mx-1 px-3 py-2 border-[1px] rounded-xl font-w-b border-gray-300 cursor-pointer whitespace-nowrap hover:border-black ${
              selectedFeature === "MUSIC" ? "bg-[#f2f2f2]" : "bg-white text-[#6e6e6e]"
            }`}
            onClick={() => setSelectedFeature("MUSIC")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.667" d="M8.332 15.417c0 1.15-1.12 2.083-2.5 2.083-1.381 0-2.5-.933-2.5-2.083s1.119-2.084 2.5-2.084c1.38 0 2.5.933 2.5 2.084Zm0 0V6.24c0-.736.482-1.385 1.187-1.596l5-1.5c1.07-.321 2.146.48 2.146 1.596v8.177m0 0c0 1.15-1.12 2.083-2.5 2.083s-2.5-.933-2.5-2.083 1.12-2.084 2.5-2.084 2.5.933 2.5 2.084Z"></path></svg>
            <div className='ml-2'>MUSIC</div>
          </div>
          <div
            className={`flex items-center mx-1 px-3 py-2 border-[1px] rounded-xl font-w-b border-gray-300 cursor-pointer whitespace-nowrap hover:border-black ${
              selectedFeature === "SPEECH TO TEXT" ? "bg-[#f2f2f2]" : "bg-white text-[#6e6e6e]"
            }`}
            onClick={() => setSelectedFeature("SPEECH TO TEXT")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" d="M16.875 10h-8.75c-.69 0-1.25.56-1.25 1.25v5.625c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25V11.25c0-.69-.56-1.25-1.25-1.25Z"></path><path stroke="currentColor" strokeLinecap="round" d="M4.375 10h-1.25c-.69 0-1.25-.56-1.25-1.25V3.125c0-.69.56-1.25 1.25-1.25h8.75c.69 0 1.25.56 1.25 1.25v4.36"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.47 3.375c.57.696.912 1.59.912 2.563S9.04 7.804 8.47 8.5M7.037 4.222c.38.466.608 1.064.608 1.715 0 .652-.229 1.25-.608 1.716M5.625 5.134c.176.218.282.498.282.803s-.106.586-.282.804"></path><path fill="currentColor" d="M15.125 16.563h-1.194l-.391-1.058h-2.116l-.384 1.057H9.875l1.917-5h1.401zm-3.053-2.865-.339.932h1.482l-.346-.932a18 18 0 0 1-.384-1.148h-.03c-.125.385-.257.784-.383 1.148"></path></svg>
            <div className='ml-2'>SPEECH TO TEXT</div>
          </div>
          <div
            className={`flex items-center mx-1 px-3 py-2 border-[1px] rounded-xl font-w-b border-gray-300 cursor-pointer whitespace-nowrap hover:border-black ${
              selectedFeature === "DUBBING" ? "bg-[#f2f2f2]" : "bg-white text-[#6e6e6e]"
            }`}
            onClick={() => setSelectedFeature("DUBBING")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="currentColor" d="M16.875 10h-8.75c-.69 0-1.25.56-1.25 1.25v5.625c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25V11.25c0-.69-.56-1.25-1.25-1.25Z"></path><path stroke="currentColor" strokeLinecap="round" d="M4.375 10h-1.25c-.69 0-1.25-.56-1.25-1.25V3.125c0-.69.56-1.25 1.25-1.25h8.75c.69 0 1.25.56 1.25 1.25v4.36"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.47 3.375c.57.696.912 1.59.912 2.563S9.04 7.804 8.47 8.5M7.037 4.222c.38.466.608 1.064.608 1.715 0 .652-.229 1.25-.608 1.716M5.625 5.134c.176.218.282.498.282.803s-.106.586-.282.804"></path><path fill="currentColor" d="M15.125 16.563h-1.194l-.391-1.058h-2.116l-.384 1.057H9.875l1.917-5h1.401zm-3.053-2.865-.339.932h1.482l-.346-.932a18 18 0 0 1-.384-1.148h-.03c-.125.385-.257.784-.383 1.148"></path></svg>
            <div className='ml-2'>DUBBING</div>
          </div>
          <div
            className={`flex items-center mx-1 px-3 py-2 border-[1px] rounded-xl font-w-b border-gray-300 cursor-pointer whitespace-nowrap hover:border-black ${
              selectedFeature === "VOICE CLONING" ? "bg-[#f2f2f2]" : "bg-white text-[#6e6e6e]"
            }`}
            onClick={() => setSelectedFeature("VOICE CLONING")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" fillRule="evenodd" d="M13.75 11.25c0-1.036-.84-1.875-1.875-1.875h-8.75c-1.036 0-1.875.84-1.875 1.875v5.625c0 1.035.84 1.875 1.875 1.875h8.75c1.036 0 1.875-.84 1.875-1.875zm-1.875-.625c.345 0 .625.28.625.625v5.625c0 .345-.28.625-.625.625h-8.75a.625.625 0 0 1-.625-.625V11.25c0-.345.28-.625.625-.625z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M18.75 3.125c0-1.036-.84-1.875-1.875-1.875h-8.75c-1.036 0-1.875.84-1.875 1.875v4.36a.625.625 0 0 0 1.25 0v-4.36c0-.345.28-.625.625-.625h8.75c.345 0 .625.28.625.625V8.75c0 .345-.28.625-.625.625h-1.25a.625.625 0 1 0 0 1.25h1.25c1.035 0 1.875-.84 1.875-1.875z" clipRule="evenodd"></path><path fill="currentColor" d="M10.04 7.7a.313.313 0 0 0 .29.425h.522c.13 0 .248-.081.293-.204l.315-.853h2.116l.31.851a.31.31 0 0 0 .293.206h.492c.219 0 .37-.22.291-.424l-1.677-4.375a.31.31 0 0 0-.292-.201h-.972c-.129 0-.245.08-.291.2zm2.888-2.44.339.932h-1.482l.346-.931c.133-.364.266-.742.384-1.149h.03c.125.386.257.785.383 1.149M8.125 12.5h1.563c.172 0 .312.14.312.313v.624c0 .173-.14.313-.312.313H8.133c.036.58.2 1.022.451 1.32.229.273.575.48 1.104.539.172.018.312.156.312.329v.624c0 .173-.14.314-.312.301-.866-.064-1.57-.403-2.061-.988a3 3 0 0 1-.127-.164 3 3 0 0 1-.127.164c-.491.585-1.195.924-2.06.988a.295.295 0 0 1-.313-.3v-.625c0-.173.14-.31.312-.33.529-.057.875-.265 1.104-.537.25-.299.415-.741.451-1.321H5.313A.31.31 0 0 1 5 13.438v-.626c0-.172.14-.312.313-.312h1.562v-.937c0-.173.14-.313.313-.313h.625c.172 0 .312.14.312.313z"></path></svg>
            <div className='ml-2'>VOICE CLONING</div>
          </div>
          <div
            className={`flex items-center mx-1 px-3 py-2 border-[1px] rounded-xl font-w-b border-gray-300 cursor-pointer whitespace-nowrap hover:border-black ${
              selectedFeature === "ELEVENREADER" ? "bg-[#f2f2f2]" : "bg-white text-[#6e6e6e]"
            }`}
            onClick={() => setSelectedFeature("ELEVENREADER")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" fillRule="evenodd" d="M13.75 11.25c0-1.036-.84-1.875-1.875-1.875h-8.75c-1.036 0-1.875.84-1.875 1.875v5.625c0 1.035.84 1.875 1.875 1.875h8.75c1.036 0 1.875-.84 1.875-1.875zm-1.875-.625c.345 0 .625.28.625.625v5.625c0 .345-.28.625-.625.625h-8.75a.625.625 0 0 1-.625-.625V11.25c0-.345.28-.625.625-.625z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M18.75 3.125c0-1.036-.84-1.875-1.875-1.875h-8.75c-1.036 0-1.875.84-1.875 1.875v4.36a.625.625 0 0 0 1.25 0v-4.36c0-.345.28-.625.625-.625h8.75c.345 0 .625.28.625.625V8.75c0 .345-.28.625-.625.625h-1.25a.625.625 0 1 0 0 1.25h1.25c1.035 0 1.875-.84 1.875-1.875z" clipRule="evenodd"></path><path fill="currentColor" d="M10.04 7.7a.313.313 0 0 0 .29.425h.522c.13 0 .248-.081.293-.204l.315-.853h2.116l.31.851a.31.31 0 0 0 .293.206h.492c.219 0 .37-.22.291-.424l-1.677-4.375a.31.31 0 0 0-.292-.201h-.972c-.129 0-.245.08-.291.2zm2.888-2.44.339.932h-1.482l.346-.931c.133-.364.266-.742.384-1.149h.03c.125.386.257.785.383 1.149M8.125 12.5h1.563c.172 0 .312.14.312.313v.624c0 .173-.14.313-.312.313H8.133c.036.58.2 1.022.451 1.32.229.273.575.48 1.104.539.172.018.312.156.312.329v.624c0 .173-.14.314-.312.301-.866-.064-1.57-.403-2.061-.988a3 3 0 0 1-.127-.164 3 3 0 0 1-.127.164c-.491.585-1.195.924-2.06.988a.295.295 0 0 1-.313-.3v-.625c0-.173.14-.31.312-.33.529-.057.875-.265 1.104-.537.25-.299.415-.741.451-1.321H5.313A.31.31 0 0 1 5 13.438v-.626c0-.172.14-.312.313-.312h1.562v-.937c0-.173.14-.313.313-.313h.625c.172 0 .312.14.312.313z"></path></svg>
            <div className='ml-2'>ELEVENREADER</div>
          </div>
          
        </div>
        {selectedFeature === "TEXT TO SPEECH" && (
          <div className="flex flex-col max-w-250 w-[100%] bg-[#e8e8e8] h-143 mt-5 rounded-2xl mb-10 relative">
            <div className="flex justify-around w-[100%] z-20 bottom-3 absolute font-w-b">Powered by Eleven v3 (alpha)</div>
            <div className="grad h-70 w-[50%] absolute z-10 bottom-0 right-0 rounded-2xl"></div>
            <div className="flex flex-col  bg-[#ffffff] h-130 rounded-2xl absolute top-[5px] left-[6px] right-[6px] px-2 pt-3 font-w-b  justify-between z-20">
              <textarea
                placeholder="Type your text here..."
                className="w-full h-100 resize-none rounded-lg p-3 text-[#333] font-normal outline-none focus:outline-none focus:ring-0 focus:border-0 border-0"
              />


              
              <div className="flex flex-col">
                <div className="flex my-4">
                  <div className="flex justify-between w-full items-center">
                    <Dropdown selected={language} setSelected={setLanguage}/>
                    <div className="flex">
                      
                        <PlayButton selected={language}/>
                      <div className="flex items-center px-[13px] ml-2 border rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="currentColor" fillRule="evenodd" d="M10 2.5c.46 0 .833.373.833.833v6.739l1.494-1.495a.833.833 0 1 1 1.179 1.179l-2.917 2.917a.833.833 0 0 1-1.178 0L6.494 9.756a.833.833 0 1 1 1.179-1.179l1.494 1.495V3.333c0-.46.373-.833.833-.833m-6.667 9.167c.46 0 .834.373.834.833v3.333h11.666V12.5a.833.833 0 0 1 1.667 0v4.167c0 .46-.373.833-.833.833H3.333a.833.833 0 0 1-.833-.833V12.5c0-.46.373-.833.833-.833" clipRule="evenodd"></path></svg>
                      </div>
                      
                    </div>
                  </div>

                  
                </div>
                <div>
                  
                </div>
              </div>
              
            </div>
          </div>
        )}
        </div>
      </div>

    
  );
}
