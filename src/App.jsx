import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')

  return (
   <>
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setColor('red')} className="px-4 outline-none py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'red'}}>Red</button>
        <button onClick={()=>setColor('green')} className="px-4 outline-none py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'green'}}>Green</button>
        <button onClick={()=>setColor('blue')} className="px-4 outline-none py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'blue'}}>Blue</button>
        <button onClick={()=>setColor('olive')} className="px-4 outline-none py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'olive'}}>Olive</button>
        <button onClick={()=>setColor('gray')} className="px-4 outline-none py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'gray'}}>gray</button>
        <button onClick={()=>setColor('yellow')} className="px-4 outline-none py-1 rounded-full text-black shadow-lg" style={{backgroundColor:'yellow'}}>yellow</button>
        <button onClick={()=>setColor('pink')} className="px-4 outline-none py-1 rounded-full text-black shadow-lg" style={{backgroundColor:'pink'}}>pink</button>
        <button onClick={()=>setColor('purple')} className="px-4 outline-none py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'purple'}}>purple</button>
        <button onClick={()=>setColor('lavender')} className="px-4 outline-none py-1 rounded-full text-black shadow-lg" style={{backgroundColor:'lavender'}}>lavender</button>
        <button onClick={()=>setColor('white')} className="px-4 outline-none py-1 rounded-full text-black shadow-lg" style={{backgroundColor:'white'}}>white</button>
        <button onClick={()=>setColor('black')} className="px-4 outline-none py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'black'}}>black</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
