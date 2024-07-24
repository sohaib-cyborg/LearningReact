import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ 
        userInfo:{
        name:"Default",
        bio:"Default",
        }
    }
    }
    async componentDidMount(){
        let data =await fetch("https://api.github.com/users/sohaib-cyborg");
        data = await data.json();
        this.setState({
            userInfo : data,
        });     
    }
    render() {
        const {location, profession } = this.props;
        const { name, bio, avatar_url } = this.state.userInfo;
        return (
            <div className="userCard">
                <img
                src={avatar_url}
                style={{ width: '100px', height: 'auto', borderRadius: '8px' }}
                />
                <h3>Name of founder: {name}</h3>
                <h3>Lives in: {location}</h3>
                <h3>Is a: {profession}</h3>
                <h3>Bio: {bio}</h3>
                
                
              {/*}  <button onClick={() => {
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Increment Counter</button>

                <button onClick={() => {
                    this.setState(
                                           
                        {
                        count: this.state.count-1,
                    });
                }}>Decrement Counter</button>*/}
            
            </div>
        )
    }
}
export default UserClass;