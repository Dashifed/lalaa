function getFraction() {
  let text = prompt("Encrypt up to 5 letters:");
  if (text === null || text.length >= 6) {
    alert("Don't make daddy angry");
    return;
  }
  let splitText = text.split("");

  const dict = {
    " ": "000",
    a: "001",
    b: "002",
    c: "003",
    d: "004",
    e: "005",
    f: "006",
    g: "007",
    h: "008",
    i: "009",
    j: "010",
    k: "011",
    l: "012",
    m: "013",
    n: "014",
    o: "015",
    p: "016",
    q: "017",
    r: "018",
    s: "019",
    t: "020",
    u: "021",
    v: "022",
    w: "023",
    x: "024",
    y: "025",
    z: "026",
  };

  let mappedText = splitText.map((key) => dict[key]);
  let decimal = "0." + mappedText.join("");

  //Turn decimal to fraction
  let numerator = decimal;
  let denominator = 1;
  while (numerator % 1 !== 0) {
    numerator *= 10;
    denominator *= 10;
  }
  let gcd = function (a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };
  let divisor = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;
  alert(numerator + "/" + denominator);
}
