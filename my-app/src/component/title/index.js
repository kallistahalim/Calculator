import React from 'react';
import Buttons from '../buttons/index';
import Input from '../input/index';
import "./index.css";

export default function index() {
    return (
        <div>
        <p className="title">Calculator</p>
        <Input />
        <Buttons />
        </div> 
    )
   
}
