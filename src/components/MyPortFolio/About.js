import React from 'react';

const About = () => {
    return (   
    <section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
                <div class="lg:w-1/2">
                    <h2 class="text-3xl font-bold text-primary dark:text-gray-100">Who I am</h2>
                    <p>Becoming a MERN Stack Web Developer is my passion! That's why I Sign up with Jhanker Mahbub in <a className='text-violet-800 font-semibold' href="https://web.programming-hero.com/">Programming-hero</a> web-development course. It's nearly finished.Now I am looking for opportunities to utilize my learning as junior web-developer. InshoAllah very soon I will be a MERN stack web developer!</p>
                </div>

                <div class="mt-8 lg:mt-0 lg:w-1/2">
                    <div class="flex items-center justify-center lg:justify-end">
                        <div class="max-w-lg">
                            <img class="w-full h-64 rounded-full shadow" src="https://i.ibb.co/F8P0pb3/round-gradient-designify.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    );
};

export default About;