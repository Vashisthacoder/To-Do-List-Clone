import React,{useState} from 'react'

import { CardContent,Card,Typography } from '@material-ui/core';




function Message(props) {



    

 

    return (


       
        <Card>
            <CardContent>
                <Typography
                
                color="blue"
                variant="p"
                component="h3">


<button onClick={()=>{props.onSelect(props.id)}}>Delete</button>


           {props.a}={props.b}

           </Typography>

           </CardContent>
           </Card>
        
    )
}

export default Message
