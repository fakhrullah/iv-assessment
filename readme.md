## How to run

1. Clone the repository. `git clone git@github.com:fakhrullah/iv-assessment.git`
2. Run backend. Move into backend directory. `cd iv-assessment/backend`.
3. Install packages `npm install`, then run the with PORT environment you like
    & must be specified NODE_ENV='development' to prevent cors error. `PORT=3010 npm start`
4. Open new terminal to run frontend. Move into frontend directory. `cd iv-assessment/frontend`
5. Install packages `npm install`, then run the with environments required. 
   
    ```console
    PORT=3000 REACT_APP_GOOGLE_MAP_API_KEY='<google_map_api_key>' REACT_APP_BACKEND_API_URL='http://localhost:3010'  npm start
    ```

    > **Google map API key is sent through email**

6. Now, see the website in browser at `http://localhost:3000`

