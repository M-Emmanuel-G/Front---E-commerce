import React, { useState } from 'react';
import { ContainerError } from './style';

export default function Errors(textError) {
    const [error, setError] = useState('')
 return (
    <ContainerError>
        <span>{error}</span>
    </ContainerError>
 );
}