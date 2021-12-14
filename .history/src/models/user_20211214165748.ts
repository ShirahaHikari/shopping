import { useCallback, useState } from 'react'

export default () => {
    const [user, setUser] = useState({})

    const setUserData = useCallback((userName, password)=>{
        setUser({userName:userName,password:password})
    },[]);
    return { user, setUserData };
}