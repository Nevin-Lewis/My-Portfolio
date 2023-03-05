import React from 'react';
import movie from '../Images/localhost_3001_.png'
import resturant from '../Images/Group_project.png'

export default function projectCard() {
 const projects = [{name: "Resturant Finder", href: "https://brettglerum.github.io/Restaurant-Finder/", about: 'ome quick example text to build on the card title and make up the bulk of the card\'s content.', image: resturant}, {name:'Movie Database', href: 'https://damp-ocean-89555.herokuapp.com/', about: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', image: movie}]
return (
projects.map((project) => (
<div className='col-6'>
<div className="card">
<a href={project.href}>
  <img src={project.image} className="card-img-top" alt="..."/>
  </a>
    <div className="card-body">
       <h5 className="card-title">{project.name}</ h5>
       <p className="card-text">{project.about}</p>
    </div>
</div>
</div>
))
);
}