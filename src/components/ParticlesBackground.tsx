import React from "react"
import {Particles} from "react-particles";
import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = React.useCallback(async (engine: Engine) => {
        //console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles id="tsparticles"
                   init={particlesInit}
                   loaded={particlesLoaded}
                   options={{
                       background: {
                           color: {
                               value: "#242424",
                           },
                       },
                       fpsLimit: 120,
                       interactivity: {
                           events: {
                               onClick: {
                                   enable: true,
                                   mode: "push",
                               },
                               onHover: {
                                   enable: true,
                                   mode: "repulse",
                               },
                               resize: true,
                           },
                           modes: {
                               push: {
                                   quantity: 4,
                               },
                               repulse: {
                                   distance: 200,
                                   duration: 0.4,
                               },
                           },
                       },
                       particles: {
                           color: {
                               value: "#ffffff",
                           },
                           links: {
                               color: "#ffffff",
                               distance: 150,
                               enable: true,
                               opacity: 0.5,
                               width: 1,
                           },
                           collisions: {
                               enable: true,
                           },
                           move: {
                               direction: "none",
                               enable: true,
                               outModes: {
                                   default: "bounce",
                               },
                               random: false,
                               speed: 1,
                               straight: false,
                           },
                           number: {
                               density: {
                                   enable: true,
                                   area: 800,
                               },
                               value: 60,
                           },
                           opacity: {
                               value: 0.5,
                           },
                           shape: {
                               type: "circle",
                           },
                           size: {
                               value: {min: 1, max: 5},
                           },
                       },
                       detectRetina: true,
                   }}></Particles>
    )
}

export default ParticlesBackground
