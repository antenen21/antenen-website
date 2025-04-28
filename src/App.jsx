import { useState } from "react"

function App(){
  /// state (etat, données)
  const [companyName, setCompanyName] = useState("Antenen Gebäudetechnik")
  const [count, setsetCount] = useState(200000)

  /// comportements

  const handleClick = () => {
    alert("handleClick")

    setsetCount(count + 1)
    

  }

  /// render
  return (
    <div>
      <h1 className="p-4 bg-red-100">{companyName}</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increament</button>
    </div>
  );
}

export default App
