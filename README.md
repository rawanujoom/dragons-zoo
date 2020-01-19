# dragons-zoo
A dragon tracking application.

## Running the application locally

1. In project directory run `npm install` to install dependencies.
2. In config file: add your db connections.
3. run migrations in migration folder.
4. In project directory run `npm run start` to start the application, you should see a message telling you that it's running on the configured port 2000,
now you can go to http://localhost:2000/.
5. Frontend is using angular framework that eventually created a bundled files. to add frontend code changes those files must be regenerated, the following steps be done:
in a new shell go to project directory/client and run npm install to install frontend dependencies.
install angular cli by running npm install -g @angular/cli
in the same frontend shell run the command `ng build --watch` to see your changes.
