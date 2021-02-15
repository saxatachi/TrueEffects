import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
const ModalDisplayTrainingItem = (props) => {
    return (
        <>
            <tr>
                <td>{props.training.exercise.name}</td>
                <td>{props.training.reps.length}</td>
                <td>{props.training.rest}</td>
                <td>{props.training.weight} kg</td>
                <td>{props.training.concentric_phase}/{props.training.pause_after_concentric_phase}/{props.training.eccentric_phase}/{props.training.pause_after_eccentric_phase}</td>
            </tr>
        </>
    );
};
const mapStateToProps = (state) => {
    return{
        trainings: state.training.trainings.data,
        loadedtrainings: state.training.loadedtrainings,
        measurements: state.training.measurements.data,
        goals: state.training.goals.data,
        exercises: state.training.exercises.data
    }
}
export default connect(mapStateToProps)(ModalDisplayTrainingItem); 
