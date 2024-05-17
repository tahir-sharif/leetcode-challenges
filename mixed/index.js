// Flatten a Dictionary
// source: https://www.pramp.com/challenge/AMypWAprdmUlaP2gPVLZ

const input = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};

function flattenDictionary(dict, parentKey) {
  let newObj = {};

  for (const key in dict) {
    const value = dict[key];
    const objKey = parentKey ? `${parentKey}${key && `.${key}`}` : key;

    if (typeof value === "object" && value !== null) {
      Object.assign(newObj, flattenDictionary(value, objKey));
    } else {
      newObj[objKey] = value;
    }
  }

  return newObj;
}

console.log(flattenDictionary(input));
