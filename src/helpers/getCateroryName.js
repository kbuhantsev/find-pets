const getCategoryName = category => {
  switch (category) {
    case 'sell':
      return 'sell';
    case 'lostFound':
      return 'lost/found';
    case 'inGoodHands':
      return 'in good hands';
    default:
      return 'sell';
  }
};

export default getCategoryName;
