/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let result = [];
  function shortest() {
    let copy = people.slice();
    let array = [];
    let shortest = Number.POSITIVE_INFINITY;
    for (let i = 0; i < people.length; i++) {
      if (people[i][0] < shortest) {
        shortest = people[i][0];
      }
    }
    for (let i = copy.length - 1; i >= 0; i--) {
      if (copy[i][0] <= shortest) {
        // console.log(shortest, copy[i], "people=", people);
        array.push(copy[i]);
        people.splice(i, 1);
      }
    }
    return array;
  }
  while (people.length) {
    const person = shortest();
    console.log("loop", person, result);
    let position = result.length;
    let i = 0;
    while (i < person.length) {
      if (position) {
        let j = result.length - 1;
        while (j >= 0) {
          console.log("in", j, person[i], result);
          if (person[i][1] < result[j][1]) {
            console.log("match");
            result.splice(j, 0, person[i]);
            break;
          } else if (j === 0) {
            result.unshift(person[i]);
            break;
          }
          j--;
        }
      } else {
        console.log("person", person);
        result = person.slice();
      }
      i++;
    }
  }

  return result;
};

const input = [
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2]
];

console.log("result=", reconstructQueue(input));
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
