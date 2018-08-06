export default ({ dispatch }) => next => action => {  //function that returns a function that returns a function
  // check to see if the action has a promise on payload
  // if it does then wait for it to resolve
  // if it doesn't then send the action to next middleware
  if(!action.payload || !action.payload.then){
    return next(action);
  }

  // we want to wait for promise to resolve
  // then get its data then create a new action with that data and dispatch it
  action.payload.then(function(response){
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
