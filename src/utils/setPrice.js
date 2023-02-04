
function setPrice(game) {
    const isIndie = !!game.genres.find(g => g.name === "Indie");
    const releasedYear = new Date(game.released).getFullYear();
    const currentYear = new Date().getFullYear();
    const yearsDifference = currentYear - releasedYear;
    const discountPerYear = 0.1;
    const discountLimitYear = 7;
    const price = isIndie ? 19 : 29;

    const discountedPrice = yearsDifference < discountLimitYear
        ? price * discountPerYear * yearsDifference
        : price * discountPerYear * discountLimitYear;

    const newPrice = price - discountedPrice;

    const roundedUpPrice = Math.ceil(newPrice * 2) / 2;

    return roundedUpPrice;
}

export default setPrice;