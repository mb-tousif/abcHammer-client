import React from 'react';

const ProjectGallery = () => {
return (
    <section className="text-primary body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex justify-center items-center w-full mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font md:w-2/3 lg:mb-0 mb-2">ABC Hammer Manufacturing Ltd Project Gallery</h1>
            </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://media.istockphoto.com/photos/man-installing-asphalt-roof-picture-id1025187342?b=1&k=20&m=1025187342&s=170667a&w=0&h=RVW7K60Xbwwhznm80Ytbva7UgS9CLDZG4nQTJChlB20="/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://media.istockphoto.com/photos/close-up-of-man-hammering-a-nail-into-wooden-board-picture-id916319882?b=1&k=20&m=916319882&s=170667a&w=0&h=wq9YJzP_Q3SHVUyJMj5auF7J3Y3nvBm4wqxKAP0lDrw="/>
                </div>
                <div className="md:p-2 p-1 w-full">
                    <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://media.istockphoto.com/photos/construction-roofer-nailing-wood-board-with-hammer-picture-id514859073?b=1&k=20&m=514859073&s=170667a&w=0&h=_NguIGjxuxpyVGGVg0qukJJfFuPQbFt5nGKLGIlQXuE="/>
                </div>
            </div>
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                    <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://media.istockphoto.com/photos/worker-at-construction-site-is-fixing-the-form-for-the-beam-picture-id897664288?b=1&k=20&m=897664288&s=170667a&w=0&h=hwL5kpZY0pHdf9sPl3kQrD_9cb7pTmsgXOU2MznKVEo="/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://media.istockphoto.com/photos/roofer-picture-id115728397?b=1&k=20&m=115728397&s=170667a&w=0&h=8d37Wbgkuxl03gBzh3eSXXmyf4_hOqk3DvfDDBsoQfc="/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://media.istockphoto.com/photos/contractor-man-doing-home-improvement-and-demolition-picture-id1089045626?b=1&k=20&m=1089045626&s=170667a&w=0&h=F52e-lC4ffU-RLq2AlQEteplraEMmwDqTwaAvZKw9I4="/>
                </div>
            </div>
          </div>
        </div>
    </section>
);
};

export default ProjectGallery;