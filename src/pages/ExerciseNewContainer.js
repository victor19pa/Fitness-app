import React from "react";
import '../components/styles/ExerciseNew.css'
import Loading from "../components/Loading";
import FatalError from "./500"
import ExerciseNew from "./ExerciseNew";
import url from "../config";

class ExerciseNewContainer extends React.Component {

    state = {
        form: {
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        },
        loading: false,
        error: null
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })

        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            
            let res = await fetch(`${url}/exercises`, config)
            //let res = await fetch("http://localhost:8000/api/exercises", config)
            
            let json = await res.json()
            //https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06
            console.log(json)

            this.setState({
                loading: false
            })
            window.location = '/exercise';
            //this.props.history.push('/exercise')

        } catch (error) {     
            this.setState({
                loading: false,
                error
            })
        }

    }
    
    render(){
        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <FatalError/>

        return <ExerciseNew
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
    }
}
//https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2
export default ExerciseNewContainer