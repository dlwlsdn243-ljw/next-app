"use client" // 상위폴더에서 관리
import Hello from "./component/Hello";
import Start from "./component/Start";
import Counter from "./component/Counter";
import Counter2 from "./component/Counter2";
import HelloProps from "./component/HelloProps";
import InputSample from "./component/inputSample";
import InputSample2 from "./component/inputSample2";
import UserList from "./component/user/userList";
import UserList2 from "./component/user/userList2";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-3xl font-bold my-5">Hello Next.js World~!!</h1>
        {/* react => app.js
            react => 파일명과 함수명이 동일
            next => 파일명과 함수명이 달라도 상관없음. layout.tsx, pahe.tsx 는 함부로 사용x
            컴포넌트 호출
        */}
        <Hello />
        <Start />
        <Counter />
        <Counter2 num={100} />
        <HelloProps name={"홍길동"} age = {20} />

        <hr />
        <InputSample />

        <hr />
        <InputSample2 />

        <hr />
        <UserList />

        <hr />
        <UserList2 />
    </div>
  );
}
