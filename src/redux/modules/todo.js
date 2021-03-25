//todo.js
import { firestore } from '../../firebase'
const todo_db = firestore.collection('todo');
//액션 대문자!
const LOAD = 'todo/LOAD';
const CREATE = "todo/CREATE";
const COMPLETE = 'todo/COMPLETE';
const DELETE = 'todo/DELETE';
const COMPLETELIST = 'todo/COMPLETELIST';


//초기값

const initialState = {
//id 넣기..
  todos: [
    {
    id: 1,
    year: '2021',
    month: '05',
    day: '23',
    hour: '14',
    minute:'20',
    text: '자바스크립트 공부',
    done: true
    },
    
  ],
  is_loaded: false,
};

//액션 생성자 
//완료 여부를 따지려면 데이터를 받아야겠지?
//그런데 파이어베이스에서 골라오지 말고 리덕스나 
//컴포넌트에서 고르라고 했다. 
//후에 여기에 추가하거나 컴포넌트에서 바꾸기.
//done ===false ?
export const loadTodo = (todo) => {
  return { type: LOAD,todo};

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

export const completeList = () => {
  return {type:COMPLETELIST}
}



//firebase 통신 함수 
export const loadTodoFB = () => {
  
  //미들웨어 덕에 함수 반환 
  //getState = 모듈 state 값 
  return function (dispatch,getState) {
    
    todo_db.get().then((docs) => {
      
      let todo_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          todo_data = [...todo_data, { id: doc.id, ...doc.data() }];
        }
      });
      console.log(1)
      dispatch(loadTodo(todo_data));
    });
  }
}

export const createTodoFB = (todo) => {
  
  return function (dispatch) {
    let todo_item = {
      year: todo.year,
      month: todo.month,
      day: todo.day,
      hour: todo.hour,
      minute: todo.minute,
      text: todo.text,
      done: todo.done,
    };

    todo_db.add(todo_item).then(docRef => {

      todo_item = { ...todo_item, id: docRef.id };
      dispatch(createTodo(todo_item));

    })
  }
}

export const completeTodoFB = (id) => {
  return function (dispatch) {
    
    
    //여기서 비동기 처리 후 작업을 해줘야 한다.
    //돌아가는 것도 여기서.
    todo_db.doc(id).update({ done: true }).then(() => {
      dispatch(completeTodo());
      window.location.replace("/");
    }).catch(err => {
      console.log(err)
    })
  }
}


export const deleteTodoFB = (id) => {
  
  return function (dispatch, getState) {
    const _todo_item = getState().todo.todos.find((todo) => todo.id === id)
    //없으면 그냥 리턴.
    if (!_todo_item) {
      return;
    }
    todo_db.doc(_todo_item.id).delete().then((docRef) => {
      dispatch(deleteTodo(id))
      window.location.replace("/");
    }).catch(err => {
      console.log(err)
    })
  }
}


export default function reducer(state = initialState, action = {}) {
  
  switch (action.type) {
    case LOAD:
      
       if (action.todo.length > 0) {
         return { todos: action.todo, is_loaded: true }
       }
     
      return state;
  
    case CREATE:

      const newTodos = [...state.todos, action.todo,]
      return {todos:newTodos, is_loaded: true }
      
    
    case COMPLETE: {
      const updateDone = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: true }
        } else {
          return todo;  
        }
      });
      
      return { todos: updateDone };
    
    }
      
      
    
    case DELETE:
      const todoList = state.todos.filter((todo, idx) => {
        
        if (todo.id !== action.id) {
          return todo;
        }
      });
      
      return { todos: todoList };
    
    case COMPLETELIST:

      const completeList = state.todos.filter((todo) => {

        if (todo.done === true) {
          return todo;
        }

      });
     
      return { todos: completeList };
    
   
    
    
    default:
      return state;
    //기본값으로 보내줘야 한다.
  }

}