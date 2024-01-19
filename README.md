# Error-ease

ErrorEase is a Node.js package that simplifies error handling in applications. It is written entirely in TypeScript, making it easy to use and integrate with Node.js syntax. Developers can focus on building robust and reliable Node.js applications with ErrorEase.

[![npm version](https://img.shields.io/npm/v/error-ease.svg?style=flat-square)](https://www.npmjs.org/package/error-ease)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/leandreAlly/error-ease/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/leandreAlly/error-ease/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/leandreAlly/error-ease/badge.svg?branch=main)](https://coveralls.io/github/leandreAlly/error-ease?branch=main)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Maintainability](https://api.codeclimate.com/v1/badges/97521bc99b33b8684e9e/maintainability)](https://codeclimate.com/github/leandreAlly/error-ease/maintainability)
[![npm downloads](https://img.shields.io/npm/dm/error-ease.svg?style=flat-square)](https://npm-stat.com/charts.html?package=error-ease)

## Installation

Use the package manager [npm](https://www.npmjs.com/package/error-ease) to install error-ease.

```bash
npm i error-ease
```

## Usage

1.  First, import the errorHandler at the top of your app.ts or app.js file:

```javascript
import { errorHandler } from 'error-ease';
```

2. After defining your routes, use the **errorHandler** as middleware:

```javascript
app.use(errorHandler);
```

Here's an example of how your **app.ts** or **app.js** file might look:

```javascript
import express from 'express';
import { errorHandler } from 'error-ease';

const app = express();

// Define your routes here...

// Use the errorHandler middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

3. Using `asyncWrapper` for Error Handling:
   _The asyncWrapper is a utility function that simplifies error handling in Express routes. It wraps your route handlers and automatically catches any errors that occur, passing them to the next middleware._

- When to Use asyncWrapper:

  - Inline Route Handlers:
    If you're defining your route handlers inline, like this:
    ```javascript
    route.get('/', async (req, res) => {
      // statements
    });
    ```
    _You don't need to use asyncWrapper, unless you want to avoid adding a try-catch block. The asyncWrapper will automatically catch any errors that occur in your route handler and pass them to the next middleware._
  - Separated Route Handlers:
    If you're separating your route handlers from your route definitions, like this:

    ```javascript
    const login = async (req, res) => {
      // statement
    };

    route.get('/', login);
    ```

    You should use asyncWrapper to ensure that errors are properly caught and handled. Here's how you can use asyncWrapper in this case:

    ```javascript
    import { asyncWrapper } from 'error-ease';

    const login = asyncWrapper(async (req, res) => {
      // statements
    });

    route.get('/', login);
    ```

    With `asyncWrapper`, your code will be safe and any errors that occur in your route handler will be automatically caught and passed to the next middleware, without the need for a try-catch

4. **Error ease in Action**:

- **Throwing Errors with `BadRequestError`**: _this class is a custom error class that you can use to throw HTTP 400 Bad Request errors in your application. Here's how you can use it:_

  ```javascript
  import { BadRequestError } from 'error-ease';

  route.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new BadRequestError('Email and password are required');
    }

    // Continue with your login logic...
  });
  ```

- **Throwing Errors with `ConflictRequestError`**:
  _this class is a custom error class that you can use to throw HTTP 409 Conflict errors in your application. Here's how you can use it:_

  ```javascript
  import { ConflictRequestError } from 'error-ease';

  route.post('/register', async (req, res) => {
    const { email } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new ConflictRequestError('User with this email already exists');
    }

    // Continue with your registration logic...
  });
  ```

- **Throwing Errors with `DatabaseConnectionError`**:
  _this class is a custom error class that you can use to throw errors when there's an issue connecting to your database. Here's how you can use it:_

  ```javascript
  import mongoose from 'mongoose';
  import { DatabaseConnectionError } from 'error-ease';

  async function connectToDb() {
    try {
      await mongoose.connect('mongodb://localhost:27017/myapp');
    } catch (err) {
      throw new DatabaseConnectionError();
    }
  }
  ```

- **Throwing Errors with `NotAuthorizedError`**:
  _this class is a custom error class that you can use to throw HTTP 401 Unauthorized errors in your application. Here's how you can use it:_

  ```javascript
  import { NotAuthorizedError } from 'error-ease';

  route.get('/protected', async (req, res) => {
    if (!req.user) {
      throw new NotAuthorizedError('You must be logged in to access this route');
    }

    // Continue with your route handler...
  });
  ```

- **Throwing Errors with `NotFoundError`**:
  _this class is a custom error class that you can use to throw HTTP 404 Not Found errors in your application. Here's how you can use it:_

  ```javascript
  import { NotFoundError } from 'error-ease';

  route.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    // Continue with your route handler...
  });
  ```

  **Note:** The error message ('User not found' in this example) is optional. If you don't provide a message, a default message will be used.

  ⚠️ If you struggle with any issue feel free to check out this app where all errors are handled with `error-ease` 👉 [Prisma-auth](https://github.com/leandreAlly/prisma-authentication-and-authorization)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Read more on our contribution guidance 👉 [CONTRIBUTING](https://github.com/leandreAlly/error-ease/blob/main/CONTRIBUTING)


## License

[MIT](https://choosealicense.com/licenses/mit/)
