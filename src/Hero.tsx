import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Four loko gluten-free franzen, vibecession enamel pin shoreditch art party copper mug austin schlitz blog
            bodega boys retro mukbang tacos. Hexagon literally jean shorts, cray post-ironic authentic aesthetic pork
            belly shabby chic. Ascot heirloom letterpress cliche vape af artisan vice raclette 8-bit big mood bodega
            boys blackbird spyplane.
          </p>
        </div>
        <div className='img-container'>
          <img className='img' src={heroImg} alt='woman and the browser' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
