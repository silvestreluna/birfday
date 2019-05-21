import util from '../helpers/util';

const authPrint = () => {
  const printItem = '<p>Auth</p>';
  util.printToDom('auth', printItem);
};

export default { authPrint };
