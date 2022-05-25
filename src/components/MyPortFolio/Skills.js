import React from 'react';

const Skills = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-secondary">As a Developer Skills I Have</h1>
            <div className="flex justify-center items-center text-xl">
            <label htmlFor="html" className="text-primary mr-6">HTML</label>
            <progress name='html' class="progress progress-success bg-slate-600 w-56 h-5" value="90" max="100"></progress>
            </div>
            <div className="flex justify-center items-center">
            <label htmlFor="css" className="text-primary mr-9">CSS</label>
            <progress name='css' class="progress progress-success w-56 h-5 bg-slate-600" value="70" max="100"></progress>
            </div>
            <div className="flex justify-center items-center">
            <label htmlFor="css" className="text-primary mr-3">Bootstrap</label>
            <progress name='css' class="progress progress-success w-56 h-5 bg-slate-600" value="80" max="100"></progress>
            </div>
            <div className="flex justify-center items-center">
            <label htmlFor="css" className="text-primary mr-3">Tailwind CSS</label>
            <progress name='css' class="progress progress-success w-56 h-5 bg-slate-600" value="80" max="100"></progress>
            </div>
            <div className="flex justify-center items-center">
            <label htmlFor="css" className="text-primary mr-6">Javascript</label>
            <progress name='css' class="progress progress-success w-56 h-5 bg-slate-600" value="70" max="100"></progress>
            </div>
            <div className="flex justify-center items-center">
            <label htmlFor="css" className="text-primary mr-9">React</label>
            <progress name='css' class="progress progress-success w-56 h-5 bg-slate-600" value="80" max="100"></progress>
            </div>
            <div className="flex justify-center items-center">
            <label htmlFor="css" className="text-primary mr-7">Firebase</label>
            <progress name='css' class="progress progress-success w-56 h-5 bg-slate-600" value="75" max="100"></progress>
            </div> 
        </div>
    );
};

export default Skills;