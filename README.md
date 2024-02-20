# Welcome to the LRNR App with Testing!

First clone the repository to your machine 

Then make sure you have the lastest version of node installed 
- then you will run
    - npm i - in the root, the backend and frontend folders

To Start the backend 
- cd into the backend folder and then run
    - npm i - to download all packages
    - npm start - you will see the port running on port 6747
    - To run the testing - you will run NODE_OPTIONS="$NODE_OPTIONS --experimental-vm-modules" npx jest
        - You will then see the tests running
    - The backend should be running on its own terminal and the testing should also be running on its own terminal
  
 
To start the frontend 
- cd into the frontend folder and then run
    - - npm i - to download all packages
    - npm start - this will automatically run on port 3000
    - To start the cypress testing you will run - npm run cypress:open from the root directory
      - then click end to end testing
      - start e2e testing in chrome
      - click frontend spec
      - then youu will see the tests load
     
Now you are all set - Enjoy. 
