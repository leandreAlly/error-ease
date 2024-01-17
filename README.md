# Error-ease ![Coming in 5 Days](https://img.shields.io/badge/Coming%20in-5%20Days-brightgreen)

ErrorEase is a Node.js package that simplifies error handling in applications. It is written entirely in TypeScript, making it easy to use and integrate with Node.js syntax. Developers can focus on building robust and reliable Node.js applications with ErrorEase.

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/leandreAlly/error-ease/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/leandreAlly/error-ease/tree/main) [![Coverage Status](https://coveralls.io/repos/github/leandreAlly/error-ease/badge.svg?branch=main)](https://coveralls.io/github/leandreAlly/error-ease?branch=main) [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com) [![Maintainability](https://api.codeclimate.com/v1/badges/97521bc99b33b8684e9e/maintainability)](https://codeclimate.com/github/leandreAlly/error-ease/maintainability)

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

<!-- ## Using asyncWrapper for Error Handling

The `asyncWrapper` is a utility function that simplifies error handling in Express routes. It wraps your route handlers and automatically catches any errors that occur, passing them to the next middleware. -->

<!-- ### When to Use asyncWrapper:

#### Inline Route Handlers

If you're defining your route handlers inline, like this:

```typescript
route.get('/', async (req, res) => {
  // statements
});
```

You don't need to use `asyncWrapper`, unless you want to avoid adding a try-catch block. The `asyncWrapper` will automatically catch any errors that occur in your route handler and pass them to the next middleware.

#### Separated Route Handlers

If you're separating your route handlers from your route definitions, like this:

```typescript
const login = async (req, res) => {
  // statements
};

route.get('/', login);
```

You should use `asyncWrapper` to ensure that errors are properly caught and handled. Here's how you can use `asyncWrapper` in this case:

```typescript
import { asyncWrapper } from 'error-ease';

const login = asyncWrapper(async (req, res) => {
  // statements
});

route.get('/', login);
```

With `asyncWrapper`, your code will be safe and any errors that occur in your route handler will be automatically caught and passed to the next middleware, without the need for a try-catch block. -->

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
