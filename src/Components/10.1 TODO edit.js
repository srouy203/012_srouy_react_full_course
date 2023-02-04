import React from "react";
import Second from "./10.2 Second"; 

export default class Todo_edit extends React.Component{
    //todo ក្នុង state សំរាប់ផ្ទុក todo
    state = { todo: []}

    //ផ្ទុក reference របស់ input
    input = React.createRef()
    
    //នៅពេលអ្នកប្រើប្រាស់ចុច "បញ្ចូល"
    onAdd = () => {
        //ប្រសិនបើមានតម្លៃក្នុង input ទើបបញ្ចូលតម្លៃ
        if(this.input.current.value)
            //កំណត់ state ថ្មី
            //ដោយមានផ្ទុកនូវ state ចាស់
            //និងតម្លៃដែលមានក្នុង input
            this.setState({
                todo: [
                    ...this.state.todo,
                    this.input.current.value
                ]
            })
        //លុបតម្លៃចេញពី input
        this.input.current.value = "";
    }
    //នៅពេលចុចខ្វែង ដើម្បីលុប todo
    //ត្រូវការ id នៃ todo ដែលត្រូវលុប
    //return នូវ function មួយ ដែលនឹងគិតគូររឿងលុប todo
    //វិធីនេះមិនត្រូវបានណែនាំអោយប្រើទេ ព្រោះពេលហៅវាម្តង វាបង្កើត function ម្តង
    onRemove = (id) => () =>{       //19 min
        //todo ថ្មីបានតម្លៃពី todo ចាស់
        const newTodo = [...this.state.todo];
        //ប្រើ splice() ដើម្បីលុប
        newTodo.splice(id, 1);
        //កំណត់ចូល state
        this.setState({ todo: newTodo});
    }

    render(){
        return(
            <>
                <h1>TODO</h1>
                <ul>
                    {this.state.todo.map((todo, id)=>
                        <li key={id}>
                            <button 
                                type="button"
                                children="x"
                                onClick={this.onRemove(id)}
                            />
                            {todo}
                            <small> ({<Second />})</small>
                        </li>
                    )}
                </ul>
                <input ref={this.input} />
                <button 
                    type="button"
                    onClick={this.onAdd}
                    children="បញ្ចូល"
                />
            </>
        )
    }
}
//11