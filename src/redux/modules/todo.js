//todo.js
//액션 대문자!
const LOAD = 'todo/LOAD';
const CREATE = "todo/CREATE";
const COMPLETE = 'todo/COMPLETE';
const DELETE = 'todo/DELETE';

//초기값

const initialState = {
//id 넣기..
  todos: [
    {
    id: 1,
    year: '2021',
    month: '03',
    day: '23',
    hour: '14',
    minute:'20',
    text: '자바스크립트 공부',
    done: true
    },
    
    {
    id:2,
    year: '2021',
    month: '03',
    day: '07',
      hour: '19',
    minute:'50',
    text: 'WIL 쓰기',
    done: true
  },
    
    {
    id:3,
    year: '2021',
    month: '03',
    day: '23',
    hour: '17',
    minute:'30',
    text: '소규모 면담하기',
    done: false
  }, 
    {
    id:4,
    year: '2021',
    month: '03',
    day: '25',
    hour: '16',
    minute:'10',
    text: '리액트 복습하기',
    done: false
  },
  { id:5,
    year: '2021',
    month: '03',
    day: '16',
    hour: '8',
    minute:'00',
    text: '팔굽혀펴기 200회',
    done: false
    },
    {
    id:6,
    year: '2021',
    month: '04',
    day: '05',
    hour: '10',
    minute:'00',
    text: '밀린 드라마 보기',
    done: false
  },
  ],
};

//액션 생성자 
//완료 여부를 따지려면 데이터를 받아야겠지?
//그런데 파이어베이스에서 골라오지 말고 리덕스나 
//컴포넌트에서 고르라고 했다. 
//후에 여기에 추가하거나 컴포넌트에서 바꾸기.
//done ===false ?
export const loadTodo = () => {
  return { type: LOAD };

}
export const createTodo = (todo) => {
  return {type:CREATE,todo}
}

export const completeTodo = (id) => {
  return {type:COMPLETE,id}
}

export const deleteTodo = (id) => {
  return {type:DELETE,id}
}

export default function reducer(state = initialState, action = {}) {
  
  switch (action.type) {
    case LOAD:
        
      return state;
  
    case CREATE:
      
      if(state.todos.length!==0){
        action.todo.id = state.todos[state.todos.length - 1].id + 1;
      }
      const newTodos = [...state.todos, action.todo];
      console.log(newTodos)
      
      return { ...state,todos: newTodos };
    
    case COMPLETE:
      
      break;
    
    case DELETE:
      const todoList = state.todos.filter((todo, idx) => {
        
        if (todo.id !== action.id) {
          return todo;
        }
      });
      
      return { todos: todoList };
    
    default:
      return state;
    //기본값으로 보내줘야 한다.
  }

}