import React from "react"
import Exercises from "./Exercises"
import Loading from "../components/Loading"
import FatalError from "./500"
import useFetch from "../hooks/useFetch"
import url from "../config"

const ExercisesContainer = () => {
    
    //const { data, loading, error } = useFetch("http://localhost:8000/api/exercises")
    const { data, loading, error } = useFetch(`${url}/exercises`)

    if(loading)
        return <Loading />
    if(error)
        return <FatalError/>   

    return <Exercises
                data={data}
            />

}

export default ExercisesContainer
