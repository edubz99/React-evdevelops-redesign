import React from 'react';
import '../scss/Projects.scss'


export const ProjectProps = [
    {
    project: { image: require('../media/images/ev-develops.jpg'),
        brief: "Evans Dube's Web Development Front-End Portfolio.",
        subBrief: "Built with: Vanilla JS, CSS and HTML."
    }
},
{
    project: { image: require('../media/images/city-electrical.jpg'),
        brief: "Electical City Contractors which utilises Google map's API as well as JS photo gallery.",
        subBrief: "Fully responsive site built with Bootstrap, SASS and JavaScript"
    }
},
{
    project: { image: require('../media/images/movieApp.jpg'),
        brief: "Movie Search application which utilises the IMDB movies database.",
        subBrief: "The application enables users to search for any movie by movie title."
    }
},
{
    project: { image: require('../media/images/quote-generator.jpg'),
        brief: "Random Quote Generator, a random quote is generated upon each click ",
        subBrief: "Built with vanilla JS, HTML, SCSS & Bootstrap."
    }
},
{
    project: { image: require('../media/images/food-mood.jpg'),
        brief: "Recipe Search application which search through a API database of 540,000+ food items",
        subBrief: "Users can search for recipes based on based preference, for example' vegan' or 'nut free'."
    }
},
{
    project: { image: require('../media/images/googleRandomiser.jpg'),
        brief: "Replica with extra features - Night Mode & Logo colour randomiser.",
        subBrief: "Fully responsive, built with: Vanilla JS - CSS - HTML5."
    }
},
{
    project: { image: require('../media/images/imageEditor.jpg'),
        brief: "Image Editor which offers user the option to select filters from pre-set filters or advanced controls. ",
        subBrief: "Fully responsive site built with Bootstrap, SASS and JavaScript"
    }
}
]



const Projects = ({ project }) => {

    return (
            <div className="project">
                <img src={project.image} alt="Project" className="project__image"/>

                <div className="project__image--overlay">
                    <div className="overlay-inner">
                        <p className="overlay-inner__para">{project.brief}</p>
                        <p className="overlay-inner__para">{project.subBrief}</p>
                        <button className="overlay-inner__button">View Project</button>
                    </div>
                </div>
            </div>
    )
}

export default Projects;