import React from 'react';
import { ContainerInput } from './style';

export default function Input(props) {
    return (
            <ContainerInput>
                <div>
                    <img src={props.img}/>
                </div>
                <input
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    required
                    maxLength={props.maxLength}
                    minLength={props.minLength}
                    type={props.type}
                />
            </ContainerInput>
    );
}