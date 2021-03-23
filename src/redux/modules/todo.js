//todo.js
//액션 대문자!
const LOAD = 'todo/LOAD'
const CREATE = "todo/CREATE"
const COMPLETE = 'todo/COMPLETE'
const DELETE = 'todo/DELETE'

//초기값
const initialState = {
  todos: [
    {
    year: '2021',
    month: '03',
    day: '23',
    time: 14,
    text: '자바스크립트 공부',
    done: true
  },{
    year: '2021',
    month: '03',
    day: '07',
    time: 19,
    text: 'WIL 쓰기',
    done: true
  },
    
    {
    year: '2021',
    month: '03',
    day: '23',
    time: 17,
    text: '소규모 면담하기',
    done: false
  }, 
  {
    year: '2021',
    month: '03',
    day: '25',
    time: 16,
    text: '리액트 복습하기',
    done: false
  },
  {
    year: '2021',
    month: '03',
    day: '16',
    time: 8,
    text: '팔굽혀펴기 200회',
    done: false
    },
  {
    year: '2021',
    month: '04',
    day: '05',
    time: 10,
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

export const completeTodo = (index) => {
  return {type:COMPLETE,index}
}

export const deleteTodo = (index) => {
  return {type:DELETE,index}
}

export default function reducer(state = initialState, action = {}) {
  
  switch (action.type) {
    case LOAD:
        
      return state;
  
    case CREATE:
      const new_todos = [...state.todos, action.todo];
      return { todos: new_todos };
    
    case COMPLETE:
      
      break;
    
    case DELETE:
      
      break;
    
    default:
      return state;
    //기본값으로 보내줘야 한다.
  }

}