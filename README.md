# DigitalEduAssignment

# Angular + Spring Boot + MySQL Setup

This project consists of an Angular frontend, a Spring Boot backend, and a MySQL database. Follow the instructions below to run the project locally on your machine.

## Prerequisites

- **Node.js** (for Angular)
- **Java JDK 11+** (for Spring Boot)
- **MySQL** (for the database)
- **Maven** (for Spring Boot)
- **Angular CLI** (for Angular)

## 1. Clone the Repository

First, clone the repository to your local machine.

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## 2. Set up MySQL Database

1. Install MySQL if you haven't already. You can download it from [here](https://dev.mysql.com/downloads/installer/).
   
2. Create a new database in MySQL. You can do this via the MySQL command line or a tool like MySQL Workbench.

   ```sql
   CREATE DATABASE your_database_name;
   ```

3. Import the initial database schema (if provided) or manually create the required tables.

4. Update your **application.properties** in the Spring Boot project to match your MySQL credentials:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
   spring.datasource.username=root
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
   ```

## 3. Run Spring Boot Application

1. Navigate to the Spring Boot project directory (`/backend`).

2. Install the necessary dependencies and run the Spring Boot application:

   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. The Spring Boot application will now be running on `http://localhost:8081`. The APIs can be accessed on this endpoint.

## 4. Run Angular Application

1. Navigate to the Angular project directory (`/frontend`).

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the Angular development server:

   ```bash
   ng serve
   ```

4. The Angular application will now be running on `http://localhost:4200`.

## 5. Access the Application

- **Frontend (Angular)**: `http://localhost:4200`
- **Backend (Spring Boot)**: `http://localhost:8081`
- **MySQL Database**: `localhost:3306`

You can now interact with the frontend, which communicates with the backend APIs, and the backend interacts with the MySQL database.

## 6. Testing the Application

Once everything is running, you can navigate to `http://localhost:4200` in your browser to see the Angular frontend. The backend Spring Boot APIs can be tested using Postman or any other API testing tool on `http://localhost:8081`.
