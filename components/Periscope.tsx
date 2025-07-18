import React, { useState, useEffect, useRef } from 'react';

interface PeriscopeProps {
    isDarkMode: boolean;
    isActive: boolean;
    onStatusChange: (status: string) => void;
    onDipCountChange: (count: number) => void;
}

const Periscope: React.FC<PeriscopeProps> = ({ isDarkMode, isActive, onStatusChange, onDipCountChange }) => {
    const [periscopePosition, setPeriscopePosition] = useState({ x: -100 , y: -100});
    const mousePosition = useRef({x: 0, y: 0});
    const animationRef = useRef<number | undefined>(undefined);
    const [dipAmount, setDipAmount] = useState(50);
    const hasMouseMoved = useRef(false);
    const [status, setStatus] = useState('STANDBY');
    const [dipCount, setDipCount] = useState(0);

    // set inital position of the periscope svg
    const setInitialPosition = () => {
        const anchorElement = document.getElementById('anchor-svg');

        if (anchorElement) {
            const rect = anchorElement.getBoundingClientRect();
            setPeriscopePosition({
               x: rect.left - 50,
               y: rect.top + (rect.height / 2)
            });
        }
    };


    // animate the periscope useEffect
    useEffect(() => {
        if (!isActive) return;  // No Periscope Animation until Anchor Activation

        hasMouseMoved.current = false;

        setInitialPosition(); // Set Periscopes inital location to the left of the anchor

        setDipAmount(50); // Periscope Starts Dipped below surface

        setTimeout(() => {
            setDipAmount(0);
        }, 500);

        // set up mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            hasMouseMoved.current = true;
            mousePosition.current = {x: e.clientX, y: e.clientY};
        };

        setTimeout (() => {

            // animation of periscope
            const animatePeriscope = () => {

                // move periscope to new position
                setPeriscopePosition(current => {
                    // calcualate the angle to move based on new mouse position

                    const deltaX = mousePosition.current.x - current.x;
                    const deltaY = mousePosition.current.y - current.y;


                    // calculate the distance to the mouse position
                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                    if (hasMouseMoved.current) {
                        if (distance > 100) {
                            // set status to HUNTING
                            setStatus('HUNTING');

                            // calculate the degrees of the angle to the mouse position
                            const angle = Math.atan2(deltaY, deltaX);
                            const stepSize = .5;
                            return {
                                x: current.x + Math.cos(angle) * stepSize,
                                y: current.y + Math.sin(angle) * stepSize
                            };
                        }

                        if (distance < 50) {
                            // set status to DIVE
                            setStatus('DIVE');

                            // periscope disappears
                            setDipAmount(20);
                        } else {
                            // set status to MONITOR
                            setStatus('MONITOR');

                            // outside of 50 distance
                            // periscope re-appears
                            setDipAmount(0);
                        }
                    }

                    return current;
                });

                animationRef.current = requestAnimationFrame(animatePeriscope);
            };

            window.addEventListener('mousemove', handleMouseMove);
            animatePeriscope();
        }, 1000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isActive]);

    // Create Status change on any status change
    useEffect(() => {
        onStatusChange(status);
    }, [status, onStatusChange]);

    // Increment Dip Count whenever DIVE happens
    useEffect(() => {
        if (status == 'DIVE') {
            setDipCount(prev => prev + 1)
        }
    }, [status]);

    // pass up dipCount using interface
    useEffect(() => {
        onDipCountChange(dipCount);
    }, [dipCount, onDipCountChange]);

    return (
        <div
            className="fixed pointer-events-none z-[100]"
            style={{
                left: periscopePosition.x - 15, // Center the 30px wide SVG
                top: periscopePosition.y - 15  // Center the 30px tall SVG
            }}
        >
            <div
                style={{
                    height: '30px',
                    width: '30px',
                    overflow: 'hidden',
                }}
            >
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 512 512"
                    className="drop-shadow-lg"
                    style={{
                        transform: `translateY(${dipAmount}px)`,
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    {/* Water waves */}
                    <path
                        className={isDarkMode ? "fill-blue-500" : "fill-blue-700"}
                        opacity="0.7"
                        d="M439.754,289.524c-13.407,0-25.216-6.043-35.635-11.374c-8.637-4.419-16.795-8.593-24.575-8.936c-6.069-0.267-10.772-5.403-10.505-11.473c0.267-6.068,5.393-10.739,11.473-10.506c12.568,0.553,23.274,6.031,33.628,11.329c9.004,4.607,17.509,8.959,25.614,8.959c11.977,0,23.917-5.381,36.557-11.077c6.826-3.076,13.884-6.257,21.228-8.694c5.765-1.914,11.992,1.208,13.905,6.974c1.914,5.766-1.208,11.992-6.974,13.905c-6.268,2.081-12.511,4.895-19.119,7.873C471.146,282.905,456.459,289.524,439.754,289.524z M317.254,289.524c-13.407,0-25.216-6.042-35.635-11.373c-9.004-4.608-17.509-8.959-25.614-8.959c-8.105,0-16.61,4.351-25.615,8.959c-10.419,5.331-22.228,11.373-35.635,11.373c-13.406,0-25.216-6.042-35.635-11.373c-9.004-4.608-17.51-8.959-25.615-8.959c-8.106,0-16.61,4.351-25.614,8.959c-10.419,5.331-22.229,11.373-35.635,11.373c-16.706,0-31.393-6.619-45.597-13.02c-6.609-2.979-12.851-5.792-19.119-7.873c-5.766-1.913-8.888-8.14-6.974-13.905c1.914-5.765,8.139-8.888,13.905-6.974c7.343,2.438,14.401,5.618,21.227,8.694c12.641,5.696,24.581,11.077,36.558,11.077c8.105,0,16.61-4.352,25.614-8.959c10.419-5.331,22.229-11.373,35.635-11.373c13.407,0,25.216,6.042,35.635,11.373c9.004,4.607,17.509,8.959,25.615,8.959c8.105,0,16.61-4.352,25.614-8.959c10.419-5.331,22.229-11.373,35.636-11.373c13.407,0,25.216,6.042,35.635,11.373c9.004,4.607,17.509,8.959,25.614,8.959c0.407,0,0.811-0.011,1.215-0.031c6.057-0.322,11.237,4.354,11.549,10.422c0.312,6.067-4.355,11.238-10.422,11.549C318.819,289.503,318.038,289.524,317.254,289.524z"/>

                    {/* Periscope main body */}
                    <path
                        className={isDarkMode ? "fill-slate-300" : "fill-slate-500"}
                        d="M511.441,339.555c-1.914-5.766-8.14-8.888-13.905-6.974c-7.343,2.438-14.401,5.617-21.226,8.693c-12.641,5.696-24.581,11.077-36.558,11.077c-8.105,0-16.61-4.352-25.615-8.958c-7.045-3.605-14.729-7.528-23.109-9.695l0-186.378c0-39.7-32.298-71.998-71.997-71.998h-44.724c-6.075,0-6.795,4.925-6.795,11l-0.766,60.995c0,6.075,1.485,11,7.561,11h33.727v192.436c-5.285-1.677-10.741-4.468-16.395-7.36c-10.419-5.331-22.229-11.373-35.636-11.373c-13.407,0-25.216,6.042-35.635,11.373c-9.004,4.607-17.509,8.958-25.614,8.958s-16.611-4.352-25.615-8.958c-10.419-5.331-22.229-11.373-35.635-11.373c-13.406,0-25.216,6.042-35.635,11.373c-9.004,4.607-17.509,8.958-25.615,8.958c-11.978,0-23.918-5.381-36.559-11.077c-6.825-3.076-13.883-6.256-21.226-8.693c-5.767-1.914-11.991,1.209-13.905,6.974c-1.914,5.766,1.209,11.992,6.974,13.905c6.268,2.081,12.51,4.894,19.119,7.872c14.204,6.4,28.891,13.02,45.597,13.02c13.406,0,25.216-6.042,35.635-11.373c9.004-4.607,17.509-8.958,25.614-8.958s16.61,4.352,25.614,8.958c10.419,5.331,22.229,11.373,35.636,11.373c13.407,0,25.216-6.042,35.635-11.373c9.004-4.607,17.509-8.958,25.614-8.958c8.106,0,16.611,4.352,25.615,8.958c10.419,5.331,22.228,11.373,35.635,11.373c0.386,0,0.766-0.022,1.15-0.032c0.21,0.012,0.418,0.032,0.631,0.032c0.605,0,1.194-0.062,1.773-0.156c11.949-0.935,22.594-6.363,32.081-11.217c9.004-4.607,17.509-8.958,25.615-8.958c8.105,0,16.61,4.352,25.615,8.958c10.419,5.331,22.229,11.373,35.635,11.373c16.706,0,31.393-6.619,45.597-13.02c6.608-2.979,12.851-5.791,19.119-7.872C510.232,351.547,513.355,345.32,511.441,339.555z M342.866,343.394c-4.393,2.248-8.666,4.43-12.833,6.081V147.318c0-6.075-4.925-11-11-11h-33.727V97.322h33.724c27.569,0,49.997,22.429,49.997,49.998l0,185.676C359.45,334.915,350.758,339.356,342.866,343.394z"/>

                    {/* More water waves */}
                    <path
                        className={isDarkMode ? "fill-blue-500" : "fill-blue-700"}
                        opacity="0.7"
                        d="M439.751,463.114c-13.406,0-25.216-6.042-35.635-11.373c-9.004-4.606-17.509-8.958-25.615-8.958c-8.105,0-16.61,4.352-25.615,8.958c-10.419,5.331-22.229,11.373-35.635,11.373c-13.406,0-25.216-6.042-35.635-11.373c-9.004-4.606-17.51-8.958-25.615-8.958c-8.105,0-16.61,4.352-25.614,8.958c-10.419,5.331-22.228,11.373-35.635,11.373c-13.407,0-25.216-6.042-35.636-11.373c-9.004-4.606-17.509-8.958-25.614-8.958s-16.61,4.352-25.614,8.958c-10.42,5.331-22.229,11.373-35.635,11.373c-16.705,0-31.392-6.618-45.595-13.018c-6.609-2.979-12.852-5.792-19.121-7.872c-5.766-1.914-8.888-8.14-6.975-13.905c1.914-5.766,8.136-8.887,13.905-6.976c7.344,2.438,14.402,5.619,21.229,8.695c12.64,5.696,24.579,11.076,36.556,11.076c8.105,0,16.61-4.352,25.615-8.958c10.419-5.331,22.229-11.373,35.635-11.373c13.406,0,25.216,6.042,35.635,11.373c9.004,4.607,17.51,8.958,25.615,8.958s16.61-4.352,25.614-8.958c10.419-5.331,22.228-11.373,35.635-11.373c13.407,0,25.216,6.042,35.636,11.373c9.004,4.607,17.509,8.958,25.614,8.958c8.106,0,16.61-4.352,25.614-8.958c10.419-5.331,22.229-11.373,35.635-11.373c13.406,0,25.216,6.042,35.635,11.373c9.004,4.607,17.509,8.958,25.615,8.958c11.977,0,23.916-5.38,36.555-11.076c6.827-3.076,13.885-6.258,21.229-8.695c5.763-1.911,11.991,1.21,13.905,6.976c1.914,5.766-1.209,11.991-6.975,13.905c-6.269,2.08-12.512,4.894-19.121,7.872C471.142,456.496,456.456,463.114,439.751,463.114z"/>

                    {/* Periscope lens parts */}
                    <path
                        className={isDarkMode ? "fill-slate-500" : "fill-slate-900"}
                        d="M274.303,158.318h-52.862c-6.075,0-7.291-4.925-7.291-11l1.277-60.995c0-6.075-0.061-11,6.015-11h52.862c6.075,0,11,4.925,11,11v60.995C285.303,153.393,280.378,158.318,274.303,158.318z M232.441,136.318h30.862V97.322h-30.862V136.318z"/>

                    <path
                        className={isDarkMode ? "fill-slate-500" : "fill-slate-900"}
                        d="M221.441,66.173h-71.36v-6.281c0-6.075-4.925-11-11-11s-11,4.925-11,11v113.857c0,6.075,4.925,11,11,11s11-4.925,11-11v-6.282h71.36c6.075,0,11-4.925,11-11V77.173C232.441,71.098,227.516,66.173,221.441,66.173z M210.441,145.467h-60.344V88.173h60.344V145.467z"/>
                </svg>
            </div>
        </div>
    );
}

export default Periscope;