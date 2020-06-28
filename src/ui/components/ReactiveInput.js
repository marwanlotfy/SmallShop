import React from 'react'
import { Input } from 'reactstrap'

export default function ReactiveInput(props) {
    return(
        <>
            <Input  style={{margin:'20px 0',display:'block'}}
                    type={props.type?props.type:'text'}
                    value={props.value?props.value:''}
                    onChange={(e)=>props.onChange(e.target.value)}
                    onBlur={(e)=>props.onChange(e.target.value)}
                    placeholder={props.placeholder}
            />
            {props.hasError?(
                <div>{props.errors}</div>
            ):null}
        </>
    )
}
