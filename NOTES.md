# vercel.json 

Problème: la page d'erreur ne s'affiche pas sur vercel mais en local oui.


{
    "routes": [
      { "handle": "filesystem" },
      { "src": "/.*", "dest": "/index.html" }
    ]
  }


Cette configuration redirige toutes les requêtes non gérées vers notre fichier index.html, où notre application React peut prendre le relais. Si l'URL ne correspond à aucune route définie dans notre application, votre page d'erreur personnalisée sera affichée, comme elle le fait en local.