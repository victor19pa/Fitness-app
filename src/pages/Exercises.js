import React from "react"
import AddButton from "../components/AddButton"
import ExerciseList from "../components/ExerciseList"
import Welcome from "../components/Welcome"


const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome
            username="Victor"  
        />
        <ExerciseList
            exercises = {data}
        />
        <AddButton/>
    </React.Fragment>
)

export default Exercises