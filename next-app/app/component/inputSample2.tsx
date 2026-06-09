import { ChangeEvent, useRef, useState } from "react"

export default function InputSample2(){

    // 기본 초기값에서 타입을 확인할 수 있는 (구조를 확인할 수 있다면...)
    // 추론타입을 사용할 수 있음

    // 타입을 꼭 명시해야 하는 경우
    //  1. 초기값 null인 경우(상태를 확인할 수 없는 경우)
    //      const[input, setInputs] = useState<inputsType | null> (null)
    //  2. 빈 배열인 경우 (배열안의 구조를 확인할 수 없는 경우)
    //  3. 복잡한 객체인 경우
    const [inputs, setInputs] = useState({
        id:'',
        nick:""
    });

    // id nick => input에서 분리
    const {id, nick} = inputs;

    // 입력할 경우 발생사는 이벤트
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    // const onChange = (e.ChangeEvent<HTMLInputElement>) =>{
    //     setInputs({
    //         ...inputs,
    //         [e.target.name] : e. target.value
    //     })
    // }

    const idInput = useRef<HTMLInputElement | null>(null);

    // 버튼 클릭
    const onClick = ()=>{
        setInputs({
            id : '',
            nick : ''
        })

        // ? 옵겨널 체이닝 (topional chaining)
        // 해당 객체가 없을 때 애러 없이 안전하게 접근 할 수 있음
        idInput.current?.focus();
    }


    return(
        <div className="p-4">
            <input 
                ref = {idInput}
                className="border border-gray-300 p-2 mr-2"
                type="text" 
                name="id" 
                id="" 
                placeholder="ID..." 
                onChange = {onChange} />
            <input 
                className="border border-gray-300 p-2"
                type="text" 
                name="nick" 
                id="" 
                placeholder="NickName..." 
                onChange = {onChange} />
                
            <button 
                className="px-4 py-2 ml-3 bg-blue-500 text-white hover:hg-blue-700"
                onClick={onClick}>
                    reset
            </button>
            <div className="mt-2">값 : {id} / {nick}</div>
        </div>
    )
}