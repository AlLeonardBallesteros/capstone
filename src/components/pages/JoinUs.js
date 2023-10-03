import React from 'react'
import * as Components from './Components';
import './pagescss/JoinUs.css'
 
 function JoinUs() {
  const [signIn, toggle] = React.useState(true);
   return(
    <div className='join-us'>
             <Components.Container >
           <Components.SignUpContainer signinIn={signIn}>
               <Components.Form>
                   <Components.Title>Be a Furparent</Components.Title>
                   <Components.Input type='text' placeholder='Name' />
                   <Components.Input type='email' placeholder='Email' />
                   <Components.Input type='password' placeholder='Password' />
                   <Components.Button>Sign Up</Components.Button>
               </Components.Form>
           </Components.SignUpContainer>

           <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Adopt now</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                </Components.Form>
           </Components.SignInContainer>

           <Components.OverlayContainer signinIn={signIn}>
               <Components.Overlay signinIn={signIn}>

               <Components.LeftOverlayPanel signinIn={signIn}>
                   <Components.Title>Welcome Back FurParent!</Components.Title>
                   <Components.Paragraph>
                       To keep connected with us please login with your personal info
                   </Components.Paragraph>
                   <Components.GhostButton onClick={() => toggle(true)}>
                       Sign In
                   </Components.GhostButton>
                   </Components.LeftOverlayPanel>

                   <Components.RightOverlayPanel signinIn={signIn}>
                     <Components.Title>Hello, Furparent!</Components.Title>
                     <Components.Paragraph>
                         Enter Your personal details and join us
                     </Components.Paragraph>
                         <Components.GhostButton onClick={() => toggle(false)}>
                             Sigin Up
                         </Components.GhostButton> 
                   </Components.RightOverlayPanel>

               </Components.Overlay>
           </Components.OverlayContainer>

       </Components.Container>
       </div>
   )
}



export default JoinUs
