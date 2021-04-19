# Quick Reference

### React reference https://reactjs.org/docs/getting-started.html
### Redux reference https://redux.js.org/api/api-reference
### Redux Form https://redux-form.com/6.4.3/docs/api/

#### ***import React from 'react';***    
|   **React** will be used for converting jsx to react element '*react.CreateElement*'  
  
***import ReactDOM from 'react-dom';***    
|    **ReactDOM** Will be used to render the react component to DOM  

***import { createStore } from 'redux';***   
|    **createStore** Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.  
  
**action** A function that returns data object. *passed to dispatch as a parameter*  
**reducer** A function used to modify the state. *called by dispatch, action will be passed to it*   
  
***import { Provider, connect } from 'react-redux';***    
|    **Provider** will pass the created store to react DOM  
|    **connect** used for reading and writing the state from react component. It will pass the state and dispatch as props to the component.  
  
***import { Field, reduxForm } from 'redux-form';***    
|    **reduxForm** used to connect form component to redux. Should pass config parameters to it.  
|    **Field** used to create input element which should be connected to redux store.  
  
***import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';***    
|    **BrowserRouter** will render the components based on the url navigation  
|    **Switch** switches the component matching with the navigation  
|    **Route** used to refer the component for routing  
|    **Link** creates a link for router navigation  
