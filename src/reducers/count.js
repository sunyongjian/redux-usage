

export default function count(num = 0, action) {
  switch (action.type) {
    case 'INCREASE':
      console.log(action, 'action');
      return num += 1;
    case 'DECREASE':
      return num -= 1;
    default:
      return num;
  }
}
