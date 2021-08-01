/** Class representing a Hash Table */

class HashTable {
  constructor(size) {
    this._storage = [];
    this._size = size;
  }
  /*
   * Inserts a new key-value pair
   * @param {string} key - the key associated with the value
   * @param {*} value - the value to insert
   */
  insert(key, value) {
    const index = this._hash(key, this._size);
    if (!this._storage[index]) {
      this._storage[index] = [];
    }
    this._storage[index].push([key, value]);
    return index;
  }
  /*
   * Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   */
  remove(key) {
    const index = this._hash(key, this._size);
    if (!this._storage[index]) {
      return;
    }
    for (let el of this._storage[index]) {
      if (el[0] === key) {
        this._storage[index] = this._storage[index].filter(
          (arr) => arr[0] !== key
        );
        console.log(this._storage[index]);
        break;
      }
    }
  }
  /*
   * Returns the value associated with a key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   */
  retrieve(key) {
    const index = this._hash(key, this._size);
    if (!this._storage[index]) {
      return;
    }
    //  [0, 0, 0, [[key, val], [key, val]]]
    for (let el of this._storage[index]) {
      if (el[0] === key) {
        console.log("found");
        break;
      }
    }
  }
  /*
   * Hashes string value into an integer that can be mapped to an array index
   * @param {string} str - the string to be hashed
   * @param {number} n - the size of the storage array
   * @return {number} - an integer between 0 and n
   */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

const HT = new HashTable(25);

HT.insert("aditya", 23);
HT.insert("adi", 25);
console.log(HT._storage);

HT.retrieve("aditya");
HT.remove("adi");
console.log(HT._storage);

// Notes:
// handle collison so that we could store at same index
// if _hash returns same index twice
