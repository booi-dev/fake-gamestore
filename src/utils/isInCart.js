
const isInCart = (toCheckGameId, cart) => !!cart.find(game => game.id === toCheckGameId);

export default isInCart;