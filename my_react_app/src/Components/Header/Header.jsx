import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    let id = 'ID'
    let uuid = 'UUID'
    const navigator = useNavigate()
    return (
        <div style={{ border: '1px solid #333', height: '40 px', position: 'fixed', width: '100%', background: '#fff' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <div><Link to={`/${id}/${uuid}`}>Главное</Link></div>
                <div onClick={() => navigator('/info', { state: { tel: '8800-45-45' } })}>Инфо</div>
                <div onClick={() => navigator('/user')}>Пользователь</div>
            </div>
        </div>
    )
}