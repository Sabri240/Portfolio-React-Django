"use client"; // Add this at the top to mark as a Client Component

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/project_list/')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return ( 
    <div>
        <h2> Projects </h2> 
        <ul> {
            projects.map((project, index) => ( <li key = { index } > { project.name }: { project.description } </li>))
        } 
        </ul> 
    </div>
    );
}

export default Projects;