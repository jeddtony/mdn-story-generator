let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

// console.log('it is here');

function randomValueFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}


let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX = ['Willy the Goblin','Big Daddy', 'Father Christmas'];

let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result(){

    // console.log('result function');
   var newStory = storyText;
    xItem = randomValueFromArray(insertX);
     console.log(xItem);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    // newStory.replace(':insertx:', xItem);
    newStory = newStory.slice(0,32) + xItem + newStory.slice(42, 77) + yItem + newStory.slice(88, 133) + zItem + newStory.slice(144, 192) + xItem + newStory.slice(222);
    // newStory = newStory.slice().replace(':inserty', yItem);
    // newStory.replace('insertz', zItem);

    // console.log(newStory);
    if(customName.value !== ''){
        let name = customName.value;
        // newStory.replace('Bob', name)
        let bobIndex = newStory.indexOf('Bob');
       newStory = newStory.slice(0, bobIndex) + name + newStory.slice(bobIndex + 3)
    }

    if(document.getElementById('uk').checked){
        // console.log('uk is checked');
        let weight = Math.round(300/14) + ' stone';
        let temperature = Math.round((94 - 32) * (5/9)) + ' centigrade';
        console.log(weight);
        newStory = newStory.slice(0, 7) + temperature + newStory.slice(20);
        let weightIndex = newStory.indexOf('300 pounds');
        newStory = newStory.slice(0, weightIndex)+ weight + (weightIndex + 10);
        
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';


}