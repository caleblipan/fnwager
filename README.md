## Documentation

Firstly, clone this repository and run:

### `npm install`

This will install all of the dependencies on the FNWager server.

Some important details:
1. I managed to hardcode the JSON APIs for /opengames in the App.js folder. I would suggest you to use the Express.js to build the APIs and database schemas from there. But it's up to you, actually.
2. There is another JSON API for the /lobby in Lobby.js. Again, you could use Express to build another API (or any other frameworks).
3. I haven't done the Login and Register page, as that is out of the scope of my contract with the client.

As of writing, I'm currently moving to another house and will not be active for about a week. I hope that you would understand.

Anyways, after you're done with your work, you can deploy the web pages by using:

### `npm run build`
