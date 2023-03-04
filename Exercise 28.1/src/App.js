import React, { Component } from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: true };  
      }  
      render() {  
          const bio = this.state.displayBio ? (  
              <div>  
                  <p><h3>I am Daniel from UAE and currently I am learning Web Development level-2 at Codeyoung.<br></br><br></br>
                  I'm very much interested in learning new skills and technologies and codeyoung is helping me to add new skills in it.<br></br>
                  </h3></p>  

            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Hey Friends!! </h1>  
                      { bio }   
                  </div>  
              );  
     }  
}  
export default App;  