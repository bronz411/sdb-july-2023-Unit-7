## usefull snippets

sfc

## Installing React

- `npx create react-app my-app`

## Running React Project

- Make sure you are in the project directory (look for the package.json file)
  -run the command `npm start`

## index.html file in public folder

- That is the root html file for the project
- React will use the div id="root" to render the app (fishing for the root)

## index.js file in src folder

- This is where the fishing happens for the id of root
  -This is where the app.js file is imported and rendered to the DOM

## Rules of JSX

- JSX must return one element
- function component must have a return statement
- must have an export of the function to be used in other files.
- The parent component needs to import and mount it.

## Creating variables that do not change

- You can create variables inside the function and reference them within {}

```jsx
function App() {
  let firstName = "Brent";
  return (
    <div className="App">
      <h1>Welcome, {firstName}</h1>
      <h2>We just modified our root App Component</h2>
    </div>
  );
}
```

## Creating React Fragments

- Fragments allow you to return multiple elements without having to wrap them in a div.
- You can use `<React.Fragment></React.Fragment>` or simply `<></>`

## inline styling in react

- There's a style prop that you can use to style elements.
- It takes an object with camelCased CSS properties.

ex: text-align becomes textAlign or list-style becomes listStyle

```jsx

```
