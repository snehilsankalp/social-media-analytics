# Social Media Analytics Assignment

## Overview
This project is focused  on the analytics for social media posts build with NodeJs, Express with TypeScript and PostgreSQL as database.

## Steps to run this project:
1. Clone this git repository.
2. Run `npm i` command
4. Setup database settings inside `src/config/dbconn.ts` file
4. Run migrations to create database tables by running
    -   npm run migrate:generate && migrate:run
5. Run `npm start` command

## Project Structure

-   src: Contains the source code of the application.
-   config: Contains project based configurations
-   controllers: Handle the business logic.
-   services: Implemention of specific services, like database operations.
-   models: Define data models.
-   routes: Define the routes for the application.
-   dist: Compiled TypeScript code.
-   node_modules: Dependencies.
-   package.json: Project configuration.
-   tsconfig.json: TypeScript configuration.

## Scalability Considerations:
### How to handle large amounts of post data and high request volumes and parallelize or distribute the analysis computation?
#### Load Balancers
-   Load balancers can help us to distribute the traffic and requests accross servers to share the load. This can help us to prevent the single point of failures.
   
#### Upgrading Resources or Vertical Scaling
-    We can increase the resource of the servers, like RAMs, CPUs etc. While this can prove to be a quick solution to handle the high amount of traffic but   it comes with a lot of challanges on how much we can scale and can be expensive as high end hardware might be required.

#### Adding Servers or Horizontal Scaling
-   Adding more servers to the infrastructure and are best suited for applications that can be distributed accross multiple servers. Advantages of this approach can include improved fault tolerance and can hanled increased user requests.

#### Queue Systems
-    Using a task queuing system to implement background jobs for resource intensive or database calls instad of making db calls directly from the application.Tools like RabbitMQ, AWS SQS etc can be used to free up some load from servers.

#### Caching or Im Memory Dbs
-   Although we have node-cache implemented in this project, but we can implement tools like Redis for caching.

#### Serverless Platforms
-    We could consider using serverless computing like AWS Lambda as these can scale on demand and help in parallel processing.

## Infrastructure Considerations:
### Handeling the Database
-   I have used PostgreSQL in this project as the instruction specically mentioned using a SQL based database, it supports the structured data that we have in this specific application. PostgreSQL also maintains a well defined schema and data consistency which is needed for this applications.

### Managing Traffic Spikes
-   As mentioned above in the points, adding load balancers can ensure that the servers can handle the spike. Also we could include auto scaling servers to ensure the servers have enough capacity to handle spikes and can be scaled down later on. We have a rate limiting in the project which already helps to prevent too many requests from a single ip .av

### High Availability and Fault Tolerance
-   To ensure high availability we can deploy this application across multiple geographic regions to handle any regional downtimes and any localized issues.
-   Implementing a microservice architecture could help to isolate failures
-   Tracking and Monitoring the health and status of the systems would help to intervene before a problem escalate. Using tools like CloudWatch and setting up alarms/alerts to notify potenitial issues.

### Data Security
-   #### Authentication & Authorization
    -   We could implement access controls to restrict the access or permission based on roles, keep a track of access and history. Also, strong authentication mehcanism can help us to prevent any unauthorized access to the systems for additional layer of security.

### Logging, Monitoring and Alerting
-   As mentione in above points, we can use tools like CloudWatch to for logs and setting up alarms/alerts to notify potenitial issues. This could help to detect and respond to security incidents, troubleshoot operational issues, and optimize system performance. We could also use Elastic Search services for real time analysis, logging and searching.

### Hosting and Services
-   For this application, I would specifally choose AWS for hosting. AWS offers powerful tools to build and scale applications. Since our focus is on Scalibility which could help us setup solutions like Load balancing, CloudWatch, AWS SQS etc. We have a lot of options to host our application with flexibility like Lambda or EC2/ECS Services and with different availability zones.

-   The services that I would ideally use is as follows.
    -   EC2/ECS for hosting the application and help us to have full control to enable custom configurations
    -   RDS (Relational Database Service) for managed relational databases i.e PostgreSQL in this case.
    -   CloudWatch for alerting services
    -   Load balancers to handle traffic efficiently
    -   AWS SQS for task queues
    -   ElasticCache for redis based in memory data store.