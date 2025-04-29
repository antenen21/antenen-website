import { Link } from "react-router";
import { inputValue } from '../login/LoginForm'

export default function OrderPage() {
  return ( 
    <div>
      <h1>Order Page {inputValue}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

