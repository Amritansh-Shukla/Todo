import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import AnimatedHeading from './AnimatedHeading';
function App() {
  return (
    
    <>
      
      <div>
        <AnimatedHeading/>
      </div>
      <div class="bg-grey-900 p-6 rounded-lg shadow-md max-w-md mx-auto">
        <p class="text-white text-lg leading-relaxed">
          A "To-Do" or "Todo" is a list of tasks or items that someone plans to
          accomplish. This concept is widely used in personal and professional
          settings to organize activities and prioritize work.
        </p>
      </div>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
