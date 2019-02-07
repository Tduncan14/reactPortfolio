import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

 const SocialProfile = (props) => {
        
        const{link,image} = props.socialProfile ;

        return(
            <span>
              < a href={link}><img src={image} style={{height:35,width:35,margin:10}}alt="this is a social profile"/></a>
            </span>
        )
        }
 

 const SocialProfiles = () =>(
   
       <div>
           <h2>Connect with me!</h2>
           <div>
               {
                   SOCIAL_PROFILES.map(SOCIAL_PROFILE =>(
                        <SocialProfile key ={SOCIAL_PROFILE.id} socialProfile ={SOCIAL_PROFILE} />
               ))
            }
           </div>
       </div>
        )
    



export default SocialProfiles;