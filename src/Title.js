import React,{Component} from 'react';

const TITLES = [
    "A software engineer",
    "A chessplayer",
    "an ethusiastic learner",
    "Love a good film"
];

class Title extends Component {

    state ={ titleIndex:0 }

    render(){
        const title = TITLES[this.state.titleIndex];

        return(
            <p> I am {title}</p>
        )
    }


}

export default Title;