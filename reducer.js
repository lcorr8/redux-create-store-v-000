//generalizaed code

function createStore(reducer) {
  let state;
 //call to dispatch should call a reducer, reassign the state and render a change
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 
  function getState() {
    return state;
  }

  dispatch({ type: '@@INIT' });
 
  return { 
    dispatch, 
    getState
  };
};

//particular to this app  

//how the state should change in response to different actions being dispathced
function changeCount(state = {count: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}
//how the DOM is updated
function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};
 
let store = createStore(changeCount);

//what triggers a dispatch method  
let button = document.getElementById('button');

button.addEventListener('click', function(){
  dispatch({type: 'INCREASE_COUNT'})
})
