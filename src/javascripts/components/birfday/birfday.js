import util from '../../helpers/util';
import birfdayData from '../../helpers/data/birfdayData';

const birfdayPrint = (uid) => {
  birfdayData.getBirfdayByUid(uid).then((birthday) => {
    let printItem = `<h1>${birthday.date}</h1>`;
    printItem += `<img src=${birthday.imageUrl} alt="bday location" />`;
    printItem += `<h2>${birthday.location} @ ${birthday.time}</h2>`;
    util.printToDom('event', printItem);
  }).catch(err => console.error('could not get birfday', err));
};

export default { birfdayPrint };
