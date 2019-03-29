# Explanation

In this example, we are trying to get a full fledged working example of **Graphql Server** using the **Apollo Server** Package.

So for that we have used following node modules:
 - Apollo Server (apollo-server)
 - Graphql Tools (graphql-tools)
 - Mege Graphql schemas (merge-graphql-schemas)
 
Also for development we have ran a **JSON Server (https://github.com/typicode/json-server)** with the data (**data.json**) file. JSON-Server basically creates simple json server with basic REST calls, on the entity you mentioned in your file. So in our case we will have the calls like this:
 - To get all users: **GET  json_server_address/users**
 - To get 1 user: **GET  json_server_address/users/{id}**
 - To get all companies: **GET  json_server_address/companies**
 - To get 1 company: **GET  json_server_address/companies/{id}**
 - Also to get all the company a user belongs to: **GET  json_server_address/users/{id}/companies**
 - To get all users of a company: **GET  json_server_address/companies/{id}/users**

These all routes are available out of the box as soon as you start the json-server. So for our app, our JSON-Server will start at **3004** and our app will be deployed at **4000**. This information is mentioned in the **package.json** file under **scripts** section (check **start**)

## To start the server

npm install && npm start
