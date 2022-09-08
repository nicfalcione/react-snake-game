export const checkForCollision = (xPosOne, yPosOne, xPosTwo, yPosTwo, size) => {
    return (xPosOne >= xPosTwo - size && xPosOne <= xPosTwo + size && yPosOne >= yPosTwo - size && yPosOne <= yPosTwo + size);
}