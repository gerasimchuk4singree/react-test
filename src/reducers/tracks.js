import axios from 'axios';

const initialState = [
    'Smells like spirit',
    'Enter Sandman'
  ]
  
var initial = axios.get('http://api.blog.testing.singree.com/ ').then( res => {
    console.log(res.data.articles);
    
    return res.data.articles[0]
})  
console.log(initial);

  export default function tracks(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
      return [
        ...state,
        action.payload
      ];

    }
    return state;
  }