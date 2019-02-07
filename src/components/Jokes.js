import React,{Component} from 'react';

const Joke = ({joke:{setup,punchline}}) =>( <p style={{margin:20}}>{setup} <em>{punchline}</em></p>)


class Jokes extends Component{

    state = {joke:{} ,jokes:[] };

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke', {mode: 'no-cors'} )
        .then((response) =>response.json())
        .then( (json) =>this.setState({joke:json}))
        .catch(error => alert(`api call has reached it limit for the hour,sorry  ${error.message}`));
 }

 fetchJokes=()=>{ 
     fetch('https://official-joke-api.appspot.com/random_ten',{ mode: 'no-cors' })
     .then(response => response.json())
     .then(json => this.setState({jokes: json}))
     .catch(error => alert(`api call has reached it limit for the hour, sorry  ${error.message}`));

 }

 render(){
     return(
         <div>
             <h2>Section Joke</h2>
             <Joke  joke={this.state.joke}/>
             <hr /> 
             <h3>Want more jokes</h3>
             <button onClick={this.fetchJokes}> Press the Button</button>
              {
                this.state.jokes.map(joke =>(<Joke key={joke.id} joke={joke} />))
              }
         </div>
     )
 }
}



export default Jokes;