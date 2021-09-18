import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'Shuvo', 'Omar Sani', 'Popy', 'Razzak'];
  const cinemas = [
    { nayok: 'koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'Joshim', nayika: 'Suchorita'}
    
  ]
  return (
    <div className="App">
      <ul>
        {
           nayoks.map(nayok=> <li style={{listStyle:'none'}}>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}
      {
        cinemas.map(cinema =><Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
      
    </div>
  );
}

      /* <Person name={nayoks[0]} job="Actor"></Person>
      <Person name={nayoks[1]} job="Ass. Actor"></Person>
      <Person name={nayoks[2]} job="Actor"></Person> */

/*    <a href="https://.google.com/">gooogle.com</a>
      <Person name="Rubel" job="Actor"></Person>
      <Person name="BappaRaz" job="Ass. Actor"></Person>
      <Person name="Kopila" job="Actor"></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person> */

/*    <Friend phone="0234342" address="Noakhali"></Friend>
      <Friend phone="02938837" address="Rongpur"></Friend>
      <Friend phone="02433" address="cummilla"></Friend>
      <Friend phone="02938837" address="Sylhet/"></Friend> */

/*    <Product name="Phone" price="13000"></Product>
      <Product name="Earphone" price="300"></Product>
      <Product name="Fan" price="800"></Product> */

function Person(props) {
  console.log(props)
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius:'10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Profession: {props.job}</h4>
    </div>
  );
}

function Friend(props) {
  console.log(props)
  return (
    <div className='person'>
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  )
}

function Product(props) {
  return (
    <div className="person">
      <h2>Product-Name: {props.name}</h2>
      <h4>Product-Price: {props.price}</h4>
    </div>
  )
}

function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h2>Nayika: {props.nayika}</h2>
    </div>
  )
}


export default App;
