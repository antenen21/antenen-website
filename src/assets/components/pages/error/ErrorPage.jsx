import {Link} from "react-router";

export default function ErrorPage() {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">
        <button>Retourner à la page d'accueil</button>
      </Link>
    </div>
  );
}
