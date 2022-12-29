function getText() {
  let fraction = prompt("Insert that fraction over here:");
  if (fraction === null || fraction === undefined) {
    return;
  }
  let fractionArray = fraction.split("/");
  let numerator = fractionArray[0];
  let denominator = fractionArray[1];
  let decimal = numerator / denominator;
  let splitDecimal = decimal.toString().split(".");
  let num = splitDecimal[1];
  let output = [];
  let current = "";
  for (let i = 0; i < num.length; i++) {
    if (i % 3 == 0 && i != 0) {
      output.push(current);
      current = "";
    }
    current += num[i];
  }
  output.push(current);

  const dict = {
    "000": " ",
    "001": "a",
    "002": "b",
    "003": "c",
    "004": "d",
    "005": "e",
    "006": "f",
    "007": "g",
    "008": "h",
    "009": "i",
    "010": "j",
    "011": "k",
    "012": "l",
    "013": "m",
    "014": "n",
    "015": "o",
    "016": "p",
    "017": "q",
    "018": "r",
    "019": "s",
    "020": "t",
    "021": "u",
    "022": "v",
    "023": "w",
    "024": "x",
    "025": "y",
    "026": "z",
  };

  let map = output.map((key) => dict[key]);
  alert(map.join(""));
}
