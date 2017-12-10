import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import Part from './Part'

const Parts = ({match}) => (
    <div>
        <h2>Parts</h2>
        <ul>
            <li>
                <Link to={`${match.url}/computer`}>Computer</Link>
            </li>
            <li>
                <Link to={`${match.url}/video`}>Video</Link>
            </li>
            <li>
                <Link to={`${match.url}/audio`}>Audio</Link>
            </li>
        </ul>
        <hr />
        {/*The ? after wherehouseId makes that param optional*/}
        <Route path={`${match.url}/:partId/:warehouseId?`} component={Part}/>
        <Route exact path={match.url} render={() => (
            <h3>
                Please select a path.
            </h3>
        )} />
    </div>
);

export default Parts;