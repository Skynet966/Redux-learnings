# redux-learnings
This project provides redux learning from ground-up to advanced level.

I made commit with small changes so that we can easily track changes and learn redux.

## Prerequisite
* JavaScript
* Node Js

### Following packages have been used in this project.
* __Redux :__ A Predictable State Container for JS Apps.
* __Redux-logger :__ It's an middleware for redux to log state change.
* __Redux-thunk :__ Provides a pattern for redux to implement async logic.
* __Immer :__ Immer simplifies handling immutable data structures.
* __Axios :__ It is a promise-based HTTP Client for node.js and the browser.
* __Redux-toolkit :__ The batteries-included toolset for efficient Redux development.
* __Vite :__ It is a build tool that provides faster development experience for web-dev.


## Redux Concerns
* Redux requires too much boilderplate code
    * Action
    * Action object
    * Action creator
    * Switch statement in a reducer
* A lot of other packages have to be installed to work with redux
    * Redux-thunk
    * Immer
    * Redux-devtools

#### There was a need to improve the developer experience for redux


## Redux Toolkit
___
### Redux toolkit is the offical, opinionated, batteries-included toolset for efficient **Redux development.**
* Abstract over the setup process
* Handle the most common use cases