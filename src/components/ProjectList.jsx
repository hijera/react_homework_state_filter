import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css'
ProjectList.propTypes = {
    
};

function ProjectList(props) {
    const {projects}=props;
    return (
    <div className={'project-list'}>
            {projects.map((project,i)=><span className={'project'} key={i}><img src={project.img}  category={project.category} /> </span> )}
    </div>
    );
    //
}

export default ProjectList;