/* eslint-disable max-len */

const validatePick = (selectedCoords, name, data) =>
{
  const matchingDataObj = data.filter(
    (character) => character.name === name,
  )[0];

  const { coordinates } = matchingDataObj;

  return !!(
    coordinates.x.start <= selectedCoords.x
    && coordinates.x.end >= selectedCoords.x
    && coordinates.y.start <= selectedCoords.y
    && coordinates.y.end >= selectedCoords.y
  );
};

const isGuessed = (name, correctPicks) => correctPicks.some((pick) => pick.name === name);

export { validatePick, isGuessed };
