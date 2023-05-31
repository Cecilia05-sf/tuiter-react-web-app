import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5].join('');
let stringArray1 = ['string1', 'string2'].join('');

let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
].join('');

const WorkingWithArrays = () => (
    <div>
        <h2>Working with Arrays</h2>
        numberArray1 = {numberArray1}<br />
        stringArray1 = {stringArray1}<br />
        variableArray1 = {variableArray1}
        <ArrayIndexAndLength/>
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <MapFunction/>
    </div>
);

export default WorkingWithArrays;
