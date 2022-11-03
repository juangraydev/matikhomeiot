import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import io from "socket.io-client";
import { Button } from '@mui/material';
const socket = io.connect(`ws://192.168.254.102:8000`, {
  transports: ['websocket']
});


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const channels = [{id: 1, name:"channel1", status: 1, type: 0},{id: 2, name:"channel2", status: 1, type: 0},{id: 3, name:"channel3", status: 1, type: 0},{id: 4, name:"channel4", status: 1, type: 0},{id: 5, name:"channel5", status: 1, type: 0}]

export default function FullWidthGrid() {

  const [channel, setChannel] = React.useState([])
  const changeStatus = (item, index) => {
    socket.emit("send_message", {message: "on"});
    // alert("socket:", socket)
    socket.on('connect_error', err => alert(err))
    socket.on('connect_failed', err => alert(err))    
  }

  React.useEffect(()=>{
    socket.on("recieve_message", (data) => {
      alert(data.message);
    })
  }, [socket])

  React.useEffect(()=> {
    setChannel(channels);
  }, [channels])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        { channel && channel.map((item, index) => {

          return (    
          <Grid xs={6} sm={4} md={3}>
            <Item>
              {item.name}<br/>
              {item.status}<br/>
              <Button onClick={changeStatus(item,index)}>test</Button>
            </Item>
          </Grid>
          )
        })}

        
      </Grid>
    </Box>
  );
}
