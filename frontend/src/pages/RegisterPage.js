import { useState } from "react";

export default function RegisterPage(){
    return(
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={ev=>setUsername(ev.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)}/>
            <button>Register</button>
        </form>
    );
}