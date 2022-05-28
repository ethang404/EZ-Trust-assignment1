import {useState} from "react";

import { TextField,Grid,Button, Switch } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Auth from "./Auth";
import Register from "./Register";

export default function Home(){
    //Add onChange to Switch
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const [darkMode, setDarkMode] = useState(true);

    const handleSubmit = async (event) => {
		event.preventDefault(); //idk what this does
		setUsername(username);
		setPassword(password);
        try{
            const response = await fetch("http://localhost:8000/auth/" + username + "/" + password) //redirect to Auth depending on result of response
            //import status and response on backend->consult techwithtim github
            if (response.ok){
                <Auth prop = {username}/>
            }
            else{
                <Register />
            }
        }
        catch (err) {
            console.log(err);
          }
	};

    const darkTheme = createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
    });

    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing = {2}>
                <Grid item xs = {12}>

                    Switch Between dark and light theme: <Switch defaultChecked onChange = {(e)=> {if(darkMode == true){
                        setDarkMode(false);
                    }
                    else{
                        setDarkMode(true);
                    }
                    }}></Switch>
                </Grid>
                <Grid item xs = {12}>
                <h3>Login Here</h3>
                </Grid>
                <Grid item xs = {12}>
                    <TextField className = "user" id="outlined-basic" label="Username" value = {username} variant="outlined" required onChange={(e) => setUsername(e.target.value)}/>
                </Grid>
                <Grid item xs = {12}>
                    <TextField id="outlined-password-input" label="Password" type="password" required value = {password} onChange={(e) => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs = {12}>
                    <Button onClick = {handleSubmit}>Login</Button>
                </Grid>
            </Grid>
        </ThemeProvider>
        
    );
}