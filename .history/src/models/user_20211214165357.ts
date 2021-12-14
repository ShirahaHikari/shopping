import { useState } from 'react'

export default () => {
    const [user, setUser] = useState({})
    return { user, setUser };
}