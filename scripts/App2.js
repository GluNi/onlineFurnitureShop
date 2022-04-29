function App2(props) {
  const [items, setItems] = React.useState(props.items);
  const itemList = items.map(item => (
  <RendItemBucket id={item.id} name={item.name} price={item.price} image={item.image} description={item.description} count={item.count} amount={item.amount} key={item.id}/>
)); 
  
 
  return (
  CART.length === 0 ?
  	<div>
  		Your cart is empty
  	</div> :
  	<div className="productItems">
  		{itemList}
  	</div>
  );
}

const CART = JSON.parse(localStorage.getItem('Cart')) ? JSON.parse(localStorage.getItem('Cart')) : [];

function RendItemBucket(props) {	

	const [count, setCount] = React.useState(CART[CART.findIndex(value => value.id === props.id)].amount); 
    
    let max=5;
    let min=1;
    let total = 0;

    

  const incr = () => {	
  	if (count < max) {        
        setCount(count + 1);        
    } 
  }

  const decr = () => {	
  	if (count > min) {        
        setCount(count - 1);        
    } 
  }
	
    React.useEffect(
    () => {     
          console.log('effect:  '+ count);
          CART[CART.findIndex(value => value.id === props.id)].amount = count;
          localStorage.setItem('Cart',JSON.stringify(CART));
          for (let itemCart of CART) {
          total = total+itemCart.price*itemCart.amount;
          document.querySelector('.overall').textContent = `Итого: ${total}`;
          }                   
    },    
        [count]
  );     
 	     
  return (  	
  	<div className="productBucket">
  	  	<img className="productItemImg" src={props.image} alt={props.name}/> 
    	<div className="productItem">        	
        	<p className="productItemTitle">{props.name}</p>
        	<p className="productItemDescription">{props.description}</p>
        	<p className="productItemPrice">{props.price} руб.</p>         	
        	<ul>
        		<li className="handlingItem"><a href="#">Избранное</a></li>
        		<li className="handlingItem"><a href="#">Удалить</a></li>         		     
      		</ul>      		    	
      	</div>      		
    			<div className="counterItem">
    				<p className="quantity">{count}</p>
    				<div className="arrows">
    					<button className="plus" id={props.id} onClick={incr} disabled={count === max}>
    						<svg width="6px" height="5px" viewBox="0 0 6 5" fill="none">
    							<path d="M1 4L3 2L5 4" stroke="#CACDD8" strokeWidth="1.6" strokeLinecap="round"></path>
    						</svg>
    					</button>
    					<button className="minus" id={props.id} onClick={decr} disabled={count === min}>
    						<svg width="6px" height="5px" viewBox="0 0 6 5" fill="none">
    							<path d="M5 1L3 3L1 1" stroke="#CACDD8" strokeWidth="1.6" strokeLinecap="round"></path>
    						</svg>
    					</button>    					
    				</div>
    				
    			</div>    	 
    </div>
	
   );
}

ReactDOM.render(<App2 items={CART}/>, document.querySelector("#appbucket"));
