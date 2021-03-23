import { React } from 'react';
import FormGroup from './FormGroup';

function SearchDropdown(props) {

    if (props.showDropdown) {
        return (
            <div className="dropdown-menu dropdown-menu-right" style={{ display: 'block' }}  >
                <FormGroup label="From">
                    <input className="form-control form-control-sm form-control-line" type="text" />
                </FormGroup>
                <FormGroup label="To">
                    <input className="form-control form-control-sm form-control-line" type="text" />
                </FormGroup>
                <FormGroup label="Subject">
                    <input className="form-control form-control-sm form-control-line" type="text" />
                </FormGroup>
                <div className="text-right">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        );
    }
    return '';

}

export default SearchDropdown;