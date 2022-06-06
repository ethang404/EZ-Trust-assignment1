import {useState} from "react";

import { TextField,Grid,Button} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useNavigate} from "react-router-dom";

export default function Register(){ //here the redux library would be great for passing dark mode as a state, 
                                    //so I dont hoist dark mode up to App as new parent and pass as prop
    let navigate = useNavigate();
    
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const [darkMode, setDarkMode] = useState(true);

    const handleSubmit = async (event) => {
		event.preventDefault(); //idk what this does
		setUsername(username);
		setPassword(password);
        try{
            const response = await fetch("http://localhost:8000/register/" + username + "/" + password) //redirect to Auth depending on result of response
            if (response.ok){
                console.log("Pog-Account created")
                navigate("/");
            }
            else{
                console.log("not poggy woggy. Account not ccreated");
            }
        }
        catch (err) {
            console.log(err);
          }
	};

    const darkTheme = createTheme({ ///not necessary atm. Leave in for possibility of adding redux to this.
        palette: {
          mode: darkMode ? "dark" : "light",
        },
    });

    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing = {2}>
                
                <Grid item xs = {12}>
                <h3>Register Here</h3>
                </Grid>
                <Grid item xs = {12}>
                    <TextField className = "user" id="outlined-basic" label="Username" value = {username} variant="outlined" required onChange={(e) => setUsername(e.target.value)}/>
                </Grid>
                <Grid item xs = {12}>
                    <TextField id="outlined-password-input" label="Password" type="password" required value = {password} onChange={(e) => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs = {12}>
                    <Button onClick = {handleSubmit}>create Account</Button>
                </Grid>
            </Grid>
        </ThemeProvider>
        
    );
}