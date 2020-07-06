import React from 'react'
import { Input , Alert } from 'reactstrap'

export default function ReactiveInput(props) {
    return(
        <>
            <Input  style={props.hasError?{marginBottom:'2rem',borderBottom:'2px solid red'}:null}
                    type={props.type?props.type:'text'}
                    value={props.value?props.value:''}
                    onChange={(e)=>props.onChange(e.target.value)}
                    onBlur={(e)=>props.onChange(e.target.value)}
                    placeholder={props.placeholder}
            />
            {props.hasError?(
                <Alert color="danger">
                    {props.errors}
                </Alert>
            ):null}
        </>
    )
}
