import { useContext,useEffect,useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage(){

    if(redirect){

        
        return <Navigate to={'/'} />
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text" 
            placeholder="username" 
            value={username}
            onChange={ev=>setUsername(ev.target.value)}/>
            <input type="password" 
            placeholder="password" 
            value={password} 
            onChange={ev=>setPassword(ev.target.value)}/>
            <button>Login</button>
        </form>
        
    );
}