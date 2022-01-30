import React from "react"
import Card from "./Card"

const ExerciseList = ({exercises}) => (
    <>{/*sintaxis de fragment*/}
        { 
            exercises.map((exercise)=>{
                return(
                    <Card
                        key={exercise.id}
                        {...exercise}
                        /*title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}*/
                    />
                )
            })
        }
    </>//fin de fragment
    
)


export default ExerciseList


