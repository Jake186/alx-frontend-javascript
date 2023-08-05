export default function getNeighborhoodsList() {
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  function addNeighborhood(newNeighborhood) {
    sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  }

  return {
    sanFranciscoNeighborhoods,
    addNeighborhood,
  };
}