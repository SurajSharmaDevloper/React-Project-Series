import InputFields from "../components/structure/InputFields"
import TodoList from "../components/structure/TodoList";

const Page = () => {
  return <>
    <main className="w-full h-full bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]">
      <div className="w-full h-[20%] bg-center bg-cover border border-neutral-500 flex justify-center items-center"
           style={{backgroundImage:'url(./banner.jpg)'}}
      >
        <InputFields />
      </div>
      <div className="w-full h-[80%] bg-gradient-to-r from-[#f6f4eb] via-[#91c8e4] to-[#749bc2]">
        <div>
          <TodoList/>
        </div>
      </div>
    </main>
  </>;
};

export default Page;
