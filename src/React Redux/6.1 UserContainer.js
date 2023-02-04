import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchData } from './6. Redux/user/action/useAction'


function UserContainer({userList, fetchUser}){
    useEffect(()=>{
        fetchUser()
    },[])
    

  return userList.loading ? (
    <h2>Loading...</h2>
  ) : userList.error ? (
    <h2>{userList.erro}</h2>
  ) : (
    <div>
        <h2>user List</h2>
        <div>
            {userList && 
                userList.users &&
                userList.users.map( val => {
                    return(
                        <p key={val.id}>{val.id}.  {val.name}</p>
                    )
                })    
            }
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        userList: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUser: () => dispatch(fetchData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
