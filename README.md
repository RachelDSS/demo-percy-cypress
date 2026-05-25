# demo-percy-cypress

Ce projet a pour but de démontrer l'utilisation de Percy à travers un projet de test cypress. 

## Accès au board Percy 
Lien : https://percy.io/2d77c7db/web/Demo-Percy-Cypress-26958622
Compte : 
- mail : demo_percy@ozsaip.com
- mdp : #DemoPerc6

**Note:** ceci est une boite mail jetable, vous pouvez récupérer les mails ici : https://temp-mail.io/fr/

Ce compte est volontairement public, vous pouvez vous en servir pour faire des tests. 
Attention, il s'agit d'un compte gratuit, le nombre de screenshot est donc limité par mois. 

## Pré-Requis 
- NodeJS 

## lancement des tests avec percy 

La première fois que vous récupérez le projet : 
> npm install 

Ensuite pour toutes les autres fois : 

- Faire le lien avec le projet percy 
> set PERCY_TOKEN="web_16ae913df4b42672f890142f6b4837530304688790403e66eff8926e1e81492e"

- exécuter les tests cypress avec percy
> npx percy exec -- cypress run

- une fois que les tests sont lancés, vous pouvez vous rendre sur le board percy, il va préparer l'aalyse et sera disponible. 


## Documentation complémentaire 

Slides de la présentation aux Humans Talks : 
https://canva.link/4bsxh5psdldrm70

Doc Percy : 
https://www.browserstack.com/docs/percy

Doc Percy + Cypress : 
https://www.browserstack.com/docs/percy/cypress/getting-started/integrate-your-tests

Tarification Percy : 
https://www.browserstack.com/accounts/subscriptions?product=percy&ref=percy&cycle=annual