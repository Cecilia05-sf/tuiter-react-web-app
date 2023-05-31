let numberArray1 = [1, 2, 3, 4, 5];
const square = a => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

const MapFunction = () => (
    <div>
        <h2>Map</h2>
        squares = {squares.join('')}<br />
        cubes = {cubes.join('')}
    </div>
);

export default MapFunction;
