import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExercisesContainer from "../pages/ExercisesContainer";
import ExerciseNewContainer from "../pages/ExerciseNewContainer";
import NotFound from "../pages/NotFound"

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/exercise" element={ < ExercisesContainer /> }> </Route>
            <Route path="/exercise/new" element={ < ExerciseNewContainer /> } />
            <Route path="*" element={ < NotFound /> }/>
        </Routes>
    </BrowserRouter>
)

export default App