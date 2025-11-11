import { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function BlurryCursor() {
    const mouse = useRef({x: 0, y: 0});
    const circle = useRef();
    const size = 40;
    
    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
    
        mouse.current = {
            x: clientX,
            y: clientY
        }

        moveCircle(mouse.current.x, mouse.current.y);
    }

    const moveCircle = (x, y) => {
        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})
    }

    useEffect( () => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        }
    }, [])

    return (
        <div className="relative">
            <div 
                ref={circle}
                style={{
                    backgroundColor: "#51a2ff",
                    width: size,
                    height: size,
                }}
                className='top-0 left-0 fixed rounded-full blur-lg' 
            />
        </div>
    )
}