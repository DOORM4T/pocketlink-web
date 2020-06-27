const { meaningful } = require("meaningful-string");

export default function meaningfulString() {
  const strings = meaningful().toLowerCase().split("-");
  const temp = strings[0];
  strings[0] = strings[1];
  strings[1] = temp;
  return strings.join("-");
}
