import './App.css';
import { useState } from 'react';

function App() {
  
  let [title, setTitle] = useState( [ '남자 코트 추천', '강남 우동맛집', '파이썬독학' ] ); // '글제목' 배열 선언.
  let [emoji, setEmoji] = useState(0); // 따봉 변수 선언.
  let [modal, setModal] = useState(false); // 변경함수는 set으로 시작하는 게 국룰. false > 안 보임. true > 보임. 

  // function 만들어서 변경함수로 false 넣어봄
  // false 직접 넣어봄
  // <Modal/> 한번 더 적어봄
  // 변경함수 직접 넣어봄
  // 

  function close() {


      let copyModal = [...modal]; // useState로 상태 변경하기 위해서 다른 변수로 바꾸기. (화살표 바꾸기)
      copyModal = setModal(false);  // 변경함수 사용해서 copyModal에 있는 값을 false로 바꾸기. (false로 바꾸기)
      setModal(copyModal); // 변경 함수를 사용해서 copyModal에 있는 false를 modal에 전달하기. (false를 옮기기)
   
  }

  function order() {
    let reArrange = [...title].sort();
    setTitle(reArrange);
  }

  // <span onClick={ ()=> 글제목변경(글제목 = ['여자 코트 추천', '강남 우동맛집', '파이썬독학']) }>👧</span>
  // 가나다 순 정렬 기능 구현하기 >> Array 배열 정렬하는 법 구글링하기.

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

     <button onClick={ order }>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자코트 추천';
        setTitle(copy);
      }}>글수정</button>

      <div className="list">
        <h4>{ title[0] } <span onClick={ ()=> setEmoji(emoji + 1) }>👍</span> { emoji } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(true) }}>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>       
        
    
     {
       modal === true ? <Modal/> : close
     }


    </div>
  );
}



function Modal() {
  return(
    <div className="modal">
      <h4> 제목 </h4>
      <p> 날짜 </p>
      <p> 상세 내용 </p>
    </div>
  )
}


export default App;
