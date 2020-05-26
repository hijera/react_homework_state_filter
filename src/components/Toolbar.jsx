import React from 'react';
import PropTypes from 'prop-types';

Toolbar.propTypes = {
    onSelectFilter: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string
};

function Toolbar(props) {
    const {filters,selected,onSelectFilter}=props;

    const onFilter = evt =>{
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