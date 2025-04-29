import { Link } from "react-router";


export default function OrderPage() {
  return ( 
    <div>
      <h1>Order Page</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}

