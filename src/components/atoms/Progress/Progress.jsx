import { useEffect, useState } from 'react';
import './style.css';

export const CircularProgress = ({ value, color, varient }) => {

    const [perimeter, setPerimeter] = useState();

    useEffect(() => {
        const circle = document.querySelector('.path-determinate');
        const perimeter = circle.getTotalLength();
        setPerimeter(perimeter * value / 100);
    })

    const loadVarient = () => {
        if (typeof value == "number") {
            return (
                <circle className="path-determinate" stroke={color ? color : "blue"} cx="50" cy="50" r="20" fill="none" stroke-width="4" strokeDasharray={[perimeter, 200]} stroke-miterlimit="10"></circle>
            )
        }
        else {
            return (
                <circle className="path-determinate dash" stroke={color ? color : "blue"} cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
            )
        }
    }
    return (
        <svg className={varient && value ? "circular-no_rotate" : "circular"}>
            {varient && value ?
                loadVarient()
                :
                <circle className="path" stroke={color ? color : "blue"} cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
            }
        </svg>
    )
}


export const CircularProgressWithLabel = ({ value, interval, color, varient }) => {

    const [Circlevalue, setCircleValue] = useState(value);

    if (Circlevalue === "progress") {
        setCircleValue(0);
    }
    
    if (Circlevalue >= 100) {
        setCircleValue(0);
    }
    else if (Circlevalue < 100 && Circlevalue !== 0) {
        setTimeout(() => {
            setCircleValue(Circlevalue + interval);
        }, 1000)
    }
    else if (Circlevalue == 0) {
        setCircleValue(Circlevalue + interval);
    }


    return (
        <div style={{
            position: 'relative'
        }}>
            <CircularProgress value={Circlevalue} color={color} varient={varient} />
            <div className='test'>
                {Circlevalue}%
            </div>
        </div>
    )
}






