import { Link, useParams } from "react-router-dom"

export default function OrderPage() {
  /// state

const { inputValue } = useParams()
console.log(inputValue)
/// comportement

/// render
  return ( 
    <div>
      <h1>Bonjour {inputValue}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

