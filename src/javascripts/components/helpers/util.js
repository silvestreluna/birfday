
const printToDom = (divId, itemToPrint) => {
  const getItemId = document.getElementById(divId);
  getItemId.innerHTML = itemToPrint;
};

export default { printToDom };
