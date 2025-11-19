enum City { London = "LON", Paris = "PAR", Chicago = "CHI" }

type comboType = [string, number | true, 1 | 2 | 3 | City.London][];

function getValue(input: comboType): comboType {
    return [["Apples", 100, 2], ["Oranges", true, 3]];
}

let result: comboType = getValue([["Bananas", true, 1]]);
console.log(`Result: ${result}`);