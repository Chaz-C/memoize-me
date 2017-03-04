let memoById = {};

let memoQuery = {};

function getElementById(id) {
  if ( memoById.hasOwnProperty(id) ) {
    console.log('--IN MEMORY--');
    return memoById[id];
  }
  memoById[id] = document.getElementById(id);
  console.log(memoById);
  return memoById[id];
}

function querySelector(name) {
    if ( memoQuery.hasOwnProperty(name) ) {
    console.log('--IN MEMORY--');
    return memoQuery[name];
  }
  memoQuery[name] = document.querySelector(name);
  console.log(memoQuery);
  return memoQuery[name];
}

module.exports = {
  getElementById : getElementById,
  querySelector : querySelector
};
