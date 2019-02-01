import React,{Component} from 'react';

const TITLES = [
    "A software engineer",
    "A chessplayer",
    "an ethusiastic learner",
    "Love a good film",
    "I love trying to make the world a better place"
];

class Title extends Component {

    state ={ titleIndex:0 };

    componentDidMount(){
         console.log("title component has mounted");
         this.animatedTitles();
    }

    animatedTitles = () =>{
         setInterval(()=>{
             const titleIndex = (this.state.titleIndex +1) % TITLES.length;

             this.setState({titleIndex});
         },4000);
    }



    render(){
        const title = TITLES[this.state.titleIndex];

        return( <p>I am {title}</p>)
        
    }


}

export default Title;