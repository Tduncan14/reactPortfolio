
import React,{Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';


class App  extends Component{
 
    state = {displayBio:false };

 /* constructor(){
   super();
      this.state ={
          displayBio: false
      };

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }*/

 

    // to toggle the this.state displayBio
  toggleDisplayBio =() => {
       this.setState({displayBio:!this.state.displayBio});

      
  }

   render(){
  

       return(
           <div>
               <h1>Hello!</h1>
               <p>My name is Treek. I am software engineer</p>
               <p>I am always moving forward</p>
             {
                 this.state.displayBio ? (
                     <div>
                    <p> I love coding </p>
                    <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                 ) : (
                   <div>
                  <button onClick ={this.toggleDisplayBio}>Read more</button> 
                  </div>
                  )
             }
             <hr />
             <Projects />

             <hr />

             <SocialProfiles />
           </div>

       )
   }

}

export default App