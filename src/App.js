import './App.css';
import React,{useState,useEffect,classes} from 'react'
import { Button } from '@material-ui/core';
import { FormControl,InputLabel,Input,TextField } from '@material-ui/core';


import { CssBaseline, Switch,createMuiTheme } from '@material-ui/core';

import { ThemeProvider,cssBaseline} from '@material-ui/core/styles'

import Message from './Message'

function App() {
    const [input, setInput] = useState("")
    const [message, setMessage] = useState([])
    const [username, setUsername] = useState("")

    const sendmessage=(event) => {event.preventDefault();  setMessage([...message,{a:username,b:input}])

  setInput("")
     
}
    console.log(message)

  

    const deleteItems = (id)=> {
       

        setMessage((
            ) => { return message.filter((arrElem,index) =>  {
           return index !== id;
        } )})
    
    }


    useEffect(() => {
        
       setUsername(prompt("enter your name")) 

    }, [])



    const [darkMode, setDarkMode] = useState(false)

    const theme = createMuiTheme({
      palette: {
        type: darkMode ? 'dark' : 'light'
      }
    })
  
    const handleDarkMode = (theme) => {
      setDarkMode(!darkMode);
    }






    return (



        <div className="App">
      
      <form> 

        <ThemeProvider theme={theme}>
        <CssBaseline>
  
  
      <div>
  
        <Switch onChange={handleDarkMode} value={darkMode}/>
        
      </div>
  
      </CssBaseline>
  
      </ThemeProvider>

  


     <FormControl>
  <InputLabel  variant="contained" color="secondary" >Email address</InputLabel>
     <Input value={input}   onChange = {(event) =>setInput(event.target.value)}/>
    
     <Button    onClick={sendmessage}>message</Button>

     
     <button onClick={username}>Delete</button>
     


    


          
</FormControl>   


            
          
            </form>

            
          

           
  


            

            {
                message.map((message,index) =>(
                    <Message 
                    id={index} 
                    a={message.a} b={message.b}
                    
                    onSelect={deleteItems}

                  
                    />
                ))
            }
            
        </div>
        
    )
}

export default App;
