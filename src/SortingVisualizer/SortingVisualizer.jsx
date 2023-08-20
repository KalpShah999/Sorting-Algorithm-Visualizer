import React from 'react';
import * as sortingAlgorithm from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    // Function to reset the array back to default values (randomized) for a new sorting algorithm 
    resetArray() {
        const array = [];

        for (let i = 0; i < 250; i++) {
            array.push(randomIntFromInterval(5, window.innerHeight - 120));
        }
        this.setState({array});
    }

    mergeSort() {
        // Get the set of animations that visualize a merge sort 
        const animations = sortingAlgorithm.mergeSort(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');

            // Change the colour during the middle phase of the 3-piece animation 
            const isColorChange = i % 3 !== 2;

            if (isColorChange) {
                // Get the bars that are being animated and their styles 
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                // Choose the colour of the bars 
                const color = i % 3 === 0 ? '#FF8552' : '#A9DDD6';

                // Wait for a small time to make the animation smooth and make the bars light up the colour 
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i + 10);
            } else {
                // Set the bars to become the new heights to show that they've changed 
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i + 10);
            }
        }
    }

    quickSort() {
        // Get the set of animations that visualize a quick sort 
        const animations = sortingAlgorithm.quickSort(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            
            // Change the colour during the middle phase of the 3-piece animation 
            // Note that from sortingAlgorithms.js, the three stages of the animations represent: 
            //   1.  
            const isColorChange = i % 3 !== 2;

            if (isColorChange) {
                // Get the bars that are being animated and their styles 
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                // Choose the colour of the bars 
                const color = i % 3 === 0 ? '#FF8552' : '#A9DDD6';

                // Wait for a small time to make the animation smooth and make the bars light up the colour 
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i + 10);
            } else {
                // Set the bars to become the new heights to show that they've changed 
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i + 10);
            }
        }
    }

    // Not supported yet 
    heapSort() {}
    
    bubbleSort() {
        // Get the set of animations that visualize a bubble sort 
        const animations = sortingAlgorithm.bubbleSort(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');

            // Change the colour of every other pair of animations  
            // Note that from sortingAlgorithms.js, every other pair of animations represents the indices
            //   allowing for their colour to be changed, and the other represents the new values 
            //   of the array at those indices 
            const isColorChange = i % 4 < 2;

            if (isColorChange) {
                // Get the bars that are being animated and their styles 
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                // Choose the colour of the bars 
                const color = i % 4 === 0 ? '#FF8552' : '#A9DDD6';

                // Wait for a small time to make the animation smooth and make the bars light up the colour 
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i + 100);
            } else {
                setTimeout(() => {
                    // Set the bars to become the new heights to show that they've changed 
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i + 100);
            }
        }
    }

    render() {
        // Create the array that will be sorted 
        const {array} = this.state;
        const numOfBars = 250;
        const width = ((window.innerWidth - 200) / numOfBars) - 2;
        console.log(width);

        // Show the front end 
        return (
            <div className="array-container">
                <div className="bars">
                    {array.map((value, index) => (
                        <div className = "array-bar" key={index} style={{height: `${value}px`, width: `${width}px`}}></div> 
                    ))}
                </div>
                <br />
                <button className="button" onClick={() => this.resetArray()}>Generate New Array</button>
                <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className="button" onClick={() => this.quickSort()}>Quick Sort</button>
                {/*<button className="button" onClick={() => this.heapSort()}>Heap Sort</button>*/}
                <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        )
    }
}

// Function that returns a random double from the input min and max range 
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}