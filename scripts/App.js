function App(props) {
  const [items, setItems] = React.useState(props.items);
  const itemList = items.map(item => (
  <RendItem id={item.id} name={item.name} price={item.price} image={item.image} description={item.description} count={item.count} amount={item.amount} key={item.id} />
));
  return (
  <div className="productItems">
  {itemList}  
  </div>
  );
}



const CART = JSON.parse(localStorage.getItem('Cart')) ? JSON.parse(localStorage.getItem('Cart')) : [];

function RendItem(props) {


const [count, setCount] = React.useState(CART[CART.findIndex(value => value.id === props.id)] ? CART[CART.findIndex(value => value.id === props.id)].amount : props.amount); 
  let max=5;
  const addToCart = () => {
    
    if (count<max) {
    
      if (CART.findIndex(value => value.id === props.id)!=-1) {
          setCount(count => count + 1);
      }                
      else {
          CART.push(DATA.find(value => value.id === props.id));
          localStorage.setItem('Cart',JSON.stringify(CART));
      }
    }
  }   
  React.useEffect( () => {
    if (CART.findIndex(value => value.id === props.id)!=-1) {
    CART[CART.findIndex(value => value.id === props.id)].amount = count;     
    localStorage.setItem('Cart',JSON.stringify(CART));
    }
  },
  [count]);

  return (
    <div className="productItem">
        <div className="productImg">
          <img className="productItemImg" src={props.image} alt={props.name}/>
          <span className="productItemBucket" role="img" id={props.id} onClick={addToCart}></span>
          <span className="productItemFavourite" role="img" id={props.id}></span>
        </div>
        <p className="productItemTitle">{props.name}</p>
        <p className="productItemDescription">{props.description}</p>
        <p className="productItemPrice">{props.price} руб.</p>      
    </div>
    );
}


const DATA = [
  {
    id : "frt1", 
    name : "Кровать TATRAN",
    price : 120000,
    image : "images/img1.JPG",
    description : "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    count : 8,
    amount : 1,
    key : "frt1"  
  },
  { 
    id : "frt2",
    name : "Кресло VILORA",
    price : 21000,
    image : "images/img2.JPG",
    description : "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
    count : 8,
    amount : 1,
    key : "frt2"  
  },
  {  
    id : "frt3",
    name : "Стол MENU",
    price : 34000,
    image : "images/img3.JPG",
    description : "Европейский дуб - отличается особой прочностью и стабильностью.",
    count : 8,
    amount : 1,
    key : "frt3"  
  },
  {  
    id : "frt4",
    name : "Диван ASKESTA",
    price : 68000,
    image : "images/img4.JPG",
    description : "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать.",
    count : 8,
    amount : 1,
    key : "frt4"  
  },
  { 
    id : "frt5", 
    name : "Кресло LUNAR",
    price : 40000,
    image : "images/img5.JPG",
    description : "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки.",
    count : 8,
    amount : 1,
    key : "frt5"  
  },
  { 
    id : "frt6",
    name : "Шкаф NASTAN",
    price : 80000,
    image : "images/img6.JPG",
    description : "Мебель может быть оснащена разнообразными системами подсветки.",
    count : 8,
    amount : 1,
    key : "frt6"
  }  
];




ReactDOM.render(<Sortbyfield/>, document.querySelector(".select-wrapper"));

ReactDOM.render(<App items={DATA}/>, document.querySelector("#app"));