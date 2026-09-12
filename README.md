# Social Posts App

A multi-page React app that fetches posts from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) API and displays them using React Router for navigation and Redux (with Redux Thunk) for state management.

## Features

- **Home Page** (`/`): Displays a grid of post cards fetched from the API, each showing a random image, a truncated title, and a truncated body with a "Read More..." indicator when the text is cut off. Clicking a card navigates to the detail page.
- **Detail Page** (`/item/:id`): Displays the full post title, body, and the ID of the user who created the post, using the `id` route param to look up the post from the Redux store.
- **Redux Store**: Holds `posts`, `loading`, and `error` state, managed via `redux` + `react-redux` + `redux-thunk`.
- **Redux Thunk Action**: `fetchPosts` dispatches request/success/failure actions while fetching data from `https://jsonplaceholder.typicode.com/posts`.
- **Loading State**: A spinner is displayed while data is being fetched.
- **Error Handling**: Displays an error message if the API request fails.
- **Responsive Design**: Grid layout adapts to desktop and mobile screen sizes.

## Tech Stack

- React 16
- React Router DOM v5
- Redux, React-Redux, Redux Thunk
- Webpack 4 + Babel

## Project Setup

```bash
npm install
npm start    # runs dev server on http://localhost:8080
npm run build
```

## API Reference

- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Fields used: `userId`, `id`, `title`, `body`
- Images: `https://picsum.photos/200?random=${post.id}`
