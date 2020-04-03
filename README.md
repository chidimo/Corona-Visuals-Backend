# Corona Visuals Backend

<https://corona-virus-charts.netlify.com/>

## How to run on your local machine

1. Clone the repo
1. Create a `.env` file and define the following environment variables
  
    1. CONNECTION_STRING (required): This is the connection string to a MongoDB database.
    1. PORT (optional): The port to serve the app from.

1. Run `yarn` to install dependencies.
1. Run `yarn startdev` to start the the development server.
1. Visit <http://localhost:3000/api/v1/countries> to see all countries in the dataset
1. Visit <http://localhost:3000/api/v1/cases> to see all cases in the dataset.
1. Start the production server with `yarn start`. The command outputs a production build, then serves it.
