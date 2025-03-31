# SBA 308A:

## JavaScript Web Application

Gregory Jung

### Installations

- axios v1.8.4
- bootstrap v5.3.3
- vite v6.2.6

### Server commands

- Before running, the api key must be stored in a .env file and is given in the comments of the assignment.
- run the command 'npm start' to start the Vite server:

```
$ npm start
```

## About this Project

This assignment is about making AJAX calls to free APIs. Since I had already been using fetch for a while, I decided to use axios for this project.

I chose stockdata.org as my free API resource to display News, Historical data, and current prices of stocks. The API only offers 100 api calls per day and I accidentally reached that limit once because of the way I i placed the function call in my eventListener function. I learned to be careful and not call it during instanctiation.

## Requirements

### Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.

- SBA308A/src/components/apiCalls.js

### Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.

- SBA308A/src/components/newspage.js
- SBA308A/src/components/historypage.js
- SBA308A/src/components/quotepage.js

### Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. Ensure your chosen API supports this feature before beginning.

- Was told by the TA this was no longer a requirement due to the limited number of APIs that allow this.

### Make use of Promises and async/await syntax as appropriate.

- SBA308A/src/components/apiCalls.js

### Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.

- SBA308A/src/components

### Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).

- Done

### Create an engaging user experience through the use of HTML and CSS.

- I used bootstrap v5.3.3 for this project

### and explain your blockers - you can still receive partial credit).

- Done

### Commit frequently to the git repository.

- Done

### Include a README file that contains a description of your application.

- Done

### Level of effort displayed in creativity, presentation, and user experience.

- Been busy with other things this weekend so I hope to have achieved this.
