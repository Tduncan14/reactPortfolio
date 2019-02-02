import React,{Component} from 'react';

const TITLES = [
    " I am a software engineer",
    "a chessplayer",
    "an ethusiastic learner",
    "I love  a good film",
    "I love trying to make the world a better place"
];

class Title extends Component {

    state ={ titleIndex:0 };

    componentDidMount(){
        
         this.animatedTitles();
    }

    componentWillUnmount(){
        

        clearInterval(this.titleInterval);
    }

    animatedTitles = () =>{
      this.titleInterval = setInterval(()=>{
             const titleIndex = (this.state.titleIndex +1) % TITLES.length;

             this.setState({titleIndex});
         },4000);
      
    }



    render(){
        const title = TITLES[this.state.titleIndex];

        return( <p>{title}</p>)
        
    }


}

export default Title;