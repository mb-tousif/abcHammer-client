import React from 'react';
import About from './About';
import Education from './Education';
import Skills from './Skills';

const MyPortFolioMain = () => {
    return (
      <div>
        <About />
        <Education />
        <Skills />
        <div class="p-2">
          <h1 className="text-center text-primary font-bold mb-4">My Recent Projects</h1>
          <a class="mx-2" href="https://assignment-11-b30ec.web.app/" aria-label="Facebook">Project-1</a>
          <a class="mx-2" href="https://assignment-ten-8f5af.web.app/">Project-2</a>
          <a class="mx-2" href="https://harmonious-salamander-ee82fd.netlify.app/" aria-label="Github">Project-3</a>
        </div>
      </div>
    );
};

export default MyPortFolioMain;