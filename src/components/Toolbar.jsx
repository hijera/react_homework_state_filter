import React from 'react';
import PropTypes from 'prop-types';

Toolbar.propTypes = {
    
};

function Toolbar(props) {
    const {filters,selected,onSelectFilter}=props;

    const onFilter = evt =>{
        console.log(evt.target);
//        this.onSelectFilter(ev)
        onSelectFilter(evt.target.value);
    };
    return (
        <div className={'filter-list'}>
            { filters.map(filter=><button onClick={onFilter} className={'filter-button '+((selected===filter)?'active':'')} key={filter}  value={filter} >{filter}</button>
            )}
        </div>
    );
}

export default Toolbar;