
#Test code project for Juristat

### Make sure to install using the following steps

1: npm install

2: npm start

3: enjoy!

### Development process & methodology

1: Create a repo with npm init as starting point.

2: Add express.js and setup server.js to act as our base server and to call include express router.

3: Add create-react-app to act as our client for aforementioned server / api.

4: Setup concurrently as a means to launch both servers with npm start

5: Install sqlite3 to use as a local DB / data store for express.

6: Setup API router, api.js to handle actual requests and to query the sqlite3 DB

7: Setup proxy so that react will pass /api requests onto the express router.

8: Install Axios as a means of async requests to the API (bluebird works here as well but I am not familiar with it)

9: Implement Materialize CSS as basic style for website (not a designer)

10: Setup delete / hide functionality to hit the DB and update the state object.

11: Cleanup of code and variable names.