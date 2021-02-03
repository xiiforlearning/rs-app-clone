const reducer=(posts = [],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
            case 'UPDATE':
            return posts.map((post)=>{
                console.log(post._id)
                return post._id === action.payload._id ? action.payload:post})
             
        case 'CREATE':
            return [...posts,action.payload];
        default:
            return posts
    }
}
export default reducer 