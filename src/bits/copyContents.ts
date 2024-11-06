export const copyContents = () => () => {
  const contentsDiv = document.getElementById("ToCopy");
  if (contentsDiv) {
    let stringtocopy = "";
    contentsDiv.childNodes.forEach((node) => {
      if (node.childNodes.length) {
        node.childNodes.forEach((n) => {
          if (n.childNodes.length) {
            n.childNodes.forEach(
              (n2) =>
              (stringtocopy = `${stringtocopy} ${n2.nodeName === "LI" ? "- " : ""}  ${n2.textContent
                } \n`),
            );
          } else {
            stringtocopy = `${stringtocopy} ${n.textContent} \n`;
          }
        });
      } else {
        stringtocopy = `${stringtocopy} ${node.textContent} \n\n`;
      }
    });
    if (stringtocopy) {
      navigator.clipboard.writeText(stringtocopy);
      return true
    }
  }
  return false

};