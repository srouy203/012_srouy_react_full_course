import React from "react";

export default class Second extends React.Component{
    state = {seconds: 0}
    //សំរាប់ផ្ទុក id នៃ interval
    intervalHandler = 0;
    //ពេល component ត្រូវបាន mount
    //យើងបង្កើត interval
    componentDidMount(){       
        //បង្កើត interval អោយ function មួយដើររៀងរាល់ ១នាទី
        this.intervalHandler = setInterval(() =>{
            //កំណត់ seconds ថ្មីអោយធំជាងមុន ១
            this.setState({ seconds: this.state.seconds + 1});
        }, 1000);
    }
    //មុនពេលដែល component លុបចេញពី DOM
    componentWillUnmount(){
        //លុប interval
        //បើមិនដូច្នេះទេ ពេលដំណើរការ function ក្នុង interval នោះ
        //វានឹងចេញ error
        //ព្រោះ component បច្ចុប្បន្នត្រូវបានលុបហើយ
        //យើងមិនអាចកែ state បានទៀតទេ
        clearInterval(this.intervalHandler);
    }
    render(){
        return(
            <>
                <span {...this.props}>{this.state.seconds} វិនាទី</span>
            </>
        )
    }
}