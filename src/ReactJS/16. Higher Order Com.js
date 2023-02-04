import React from 'react'

const UpdateComponent = (OriginalComponent, value) => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0,
            }
          }
      
          handleCount = () =>{
              this.setState((prevState) => {
                  return {
                      count: prevState.count + value
                  }
              })
          }

        render(){
            return (
                <OriginalComponent 
                    count={this.state.count}
                    handleCount={this.handleCount}
                    {...this.props}
                />
            )
        }
    }
    return NewComponent
}

export default UpdateComponent;