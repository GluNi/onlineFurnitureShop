
function byFieldIncr(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

function byFieldDecr(field) {
  return (a, b) => a[field] < b[field] ? 1 : -1;
}

function updateDisplay() {   
   ReactDOM.render(<App items={DATA}/>, document.querySelector("#app"));
}   

function Sortbyfield() {

  const [state, setState] = React.useState({
      order : "rand",
      data : DATA           
    });   

  function updateOrder(event) {
     if (event.target.value ==='incr') {      	
        setState({
          	order: event.target.value,
          	data: DATA.sort(byFieldIncr('price'))
        });
        updateDisplay();
      }
       else {
      	   if (event.target.value ==='decr') {
      	 		setState({
     				order: event.target.value,
          			data: DATA.sort(byFieldDecr('price'))
        		});
        		updateDisplay();        		
      	 	}
      	}
    }

    return (    
    <select id="category" onChange={updateOrder} value={state.order}>
    	<option value="rand">Порядок: произвольный</option>
      <option value="incr">Порядок: сперва дешевле</option>
      <option value="decr">Порядок: сперва дороже</option>
    </select>    
    );    
}
