import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const IsChecked = ()=>{

    const navigate = useNavigate()

    useEffect(()=>{
        localStorage.getItem('isChecked') === 'true' ? navigate('/produtos') : navigate('/login')
        
    },[])
}