import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // Use Ref Hook
  const passwordRef = useRef(null)

  // https://react.dev/reference/react/useCallback
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password)
  }, [password, passwordRef])

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      str += '0123456789'
    }

    if (characterAllowed) {
      str += '`~!@#$%^&*-=_+<>,.?/:;()[]{}|'
    }

    for (let i = 1; i <= length; i++) {
      let currCharIdx = Math.floor(Math.random() * (str.length - 1))
      pass += str[currCharIdx]
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed])


  return (
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg p-4 my-8 bg-gray-800'>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='text-orange-500'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 p-4'>
          <input type="text" className='outline-none w-full py-1 px-3 rounded' id='passwd' value={password} placeholder='password' ref={passwordRef} readOnly />
          <button className='bg-red-400 text-green-800 mx-4 p-2 rounded' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" className='cursor-pointer' min={6} max={18} value={length} onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <label htmlFor="numberCheck">Allow Numbers: </label>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberCheck" onChange={() => {setNumberAllowed((prev) => (!prev))}} />
          </div>
          <div className='flex items-center gap-x-1'>
            <label htmlFor="characterCheck">Allow Characters: </label>
            <input type="checkbox" defaultChecked={characterAllowed} id="characterCheck" onChange={() => {setCharacterAllowed((prev) => (!prev))}} />
          </div>
          <div className='flex items-center gap-x-1'>
            <button className='bg-red-400 text-green-800 mx-4 p-2 rounded' onClick={passwordGenerator}>Generate Again</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
