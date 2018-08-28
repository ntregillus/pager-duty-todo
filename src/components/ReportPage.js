import React from 'react';
import {connect} from 'react-redux';

const PriorityReport = (props) => {
    return (
        <table className="container">
            <thead>
                <tr>
                    <th>Priority</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>    
            {
                props.rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td>{row.priority}</td>
                            <td>{row.count}</td>
                        </tr>);
                })
            }
            </tbody>
        </table>
    );
};

const setStateInProps = (state) => {
    console.log(state);
    
    let rows = state.toDos.reduce((result, item)=> {
        //mapping to array with index == priority
        while(result.length < item.priority+1){
            result.push(0); //defaulting index to 0
        }
        result[item.priority] += 1;
        return result;
    }, []).reduce((result, item, currentIndex) => {
        result.push({priority: currentIndex, count: item});
        return result;
    }, []).filter((item) => item.count > 0 );

    return {
        rows
    };
}

export default connect(setStateInProps)(PriorityReport);