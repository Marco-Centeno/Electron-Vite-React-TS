import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'

function App() {

  const sendNotification = () => {
    Notification.requestPermission()
.then( function (){
  new Notification("Message sended", {
    body: "Hello",
    icon: reactLogo,
  })
})  };

  return (
    <div className='bg-zinc-900 text-white grid place-content-center w-screen h-screen justify-center text-center items-center gap-4'>
      <div className=' flex flex-wrap gap-4 justify-center'>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className=" w-[10vw]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-[10vw] react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS</h1>
      <div>
        <button className=' text-black' onClick={sendNotification}>
          Send Notification
        </button>
        <p className=" text-zinc-400 p-2">
          Presseted by Marco C.
        </p>
      </div>
      <p>
        Click on the Vite or React logos to learn more
      </p>
    </div>
  )
}

export default App
