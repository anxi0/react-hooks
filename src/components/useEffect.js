import React, { useState, useEffect } from 'react';

const Study = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    
    useEffect(()=>{
      console.log("rendered")
      console.log(name,nickname)
      return() => {
        console.log("cleanup")
        console.log(name,nickname)
      }
    },[name,nickname])
  
    const onChangeName = e => {
      setName(e.target.value);
    };
  
    const onChangeNickname = e => {
      setNickname(e.target.value);
    };
    
  
    return (
      <div>
      
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
    );
  }
  const Last = () => {
    const [visible, setVisible] =useState(false);
    return (
      <div>
      <button onClick={()=>{
        setVisible(!visible);
        }}>{visible ? "숨기기":"보이기"}</button>
        {visible && <Study />}
    </div>
    );
  }

export default Last;