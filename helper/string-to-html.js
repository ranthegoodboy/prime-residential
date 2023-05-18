export default function stringToHTML(str) {
  var dom = document.createElement("div");
  dom.innerHTML = str;
  return dom;
}
