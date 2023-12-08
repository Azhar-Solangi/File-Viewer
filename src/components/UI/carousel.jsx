import React from "react";
import { Carousel } from 'bootstrap';
import image1 from '../../assets/images/Jupitario-character-v2.png'
import image2 from '../../assets/images/Squirrlo-character-v2.png'


const Carousels =()=>{

    return(
<div>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner bg-danger">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-dark">
        <h3>Jupitario Game</h3>
        <p><span className="fs-5">Jupitario,</span> an intergalactic explorer sent by scientists, ventures into unknown planets and collects exotic materials to unravel the mysteries of the universe. His journeys take him to peculiar planets beginning with our solar system then to unknown planets. Clad in cosmic robes, his navigate star lanes, encountering bizarre and bewildering environments. Jupitario’s quest to bring back extraordinary substances and knowledge remains unstoppable as he delves deeper into the unexplored depths of space.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image2} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-dark">
        <h3>Squirrlo Game</h3>
        <p><span className="fs-5"> Squirrlo,</span> a dedicated earth savior, ventures into the forest jungles on a mission to collect precious jewels of power. He navigates the untamed terrain while the aura of environmental concern and cooperation fills the air. His aim? To restore balance to the planet and protect its sacred indigenous trees from destruction so that harmony can bloom anew.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image1} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-dark">
        <h3>Jupitario Game</h3>
        <p><span className="fs-5">Jupitario,</span> an intergalactic explorer sent by scientists, ventures into unknown planets and collects exotic materials to unravel the mysteries of the universe. His journeys take him to peculiar planets beginning with our solar system then to unknown planets. Clad in cosmic robes, his navigate star lanes, encountering bizarre and bewildering environments. Jupitario’s quest to bring back extraordinary substances and knowledge remains unstoppable as he delves deeper into the unexplored depths of space.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
)
};

export default Carousels;