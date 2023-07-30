# Frontend Development Task 

## Objective

Your task is to create a simple CRUD application using React with TypeScript.

## General Requirements

- The application must be written in TypeScript.
- The application should be able to perform all CRUD operations (Create, Read, Update, Delete).
- The styling is not a core requirement, but a well-styled app will win extra points.
- Create a single-page application (SPA).

## Detailed Requirements

### Directory Structure

Maintain a clean and organized directory structure. Here is a suggestion:

```
src/
├── components/
│ ├── FormComponent.tsx
│ ├── ListComponent.tsx
├── services/
│ └── api.ts
├── App.tsx
└── index.tsx
```


### Components

Create the necessary components to perform the CRUD operations. You don't need one component per operation, but the frontend must be capable of executing all CRUD operations.

### Connect to Backend

The application should interact with the backend:

- In the **api.ts** file (inside the services folder), define the functions for calling your backend API endpoints.
- Use these functions in your components to perform the CRUD operations.

### Routing

Use a routing library such as `react-router-dom` to navigate between different components/pages.

```

bash
npm install react-router-dom
npm install @types/react-router-dom

```

### Error Handling
Ensure your application can handle potential errors. Display meaningful error messages to the user.

### Submission
Push your code to a Git repository and submit the link.

### Evaluation Criteria
- Code organization and clarity.
- Use of TypeScript and best practices.
- Ability to perform CRUD operations and connect to the backend.
- Error handling.
- Extra points for good styling.

Remember, the goal of this task is to evaluate your knowledge and skills in TypeScript, React, code organization, and connecting to APIs. Good luck!
