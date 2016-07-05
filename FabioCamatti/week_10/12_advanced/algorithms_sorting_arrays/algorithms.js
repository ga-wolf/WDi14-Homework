Searcher = {
  linear: function(array, element) {
    for(var i = 0; i < array.length; i++) {
      console.log("linear");
      if (array[i] == element) {
        return i;
      }
    }
    return -1;
  },

  binary: function(array, element) {
    return this.binarySearch(array, element, 0, array.length - 1);
  },

  binarySearch: function(array, element, s, e) {
    console.log("binary")
    var m = Math.floor((s + e) / 2);
    if (array[m] == element) {
      return m;
    } else if (array[m] > element) {
      return this.binarySearch(array, element, s, m - 1);
    } else {
      return this.binarySearch(array, element, m + 1, e);
    }
  }
}

Sorter = {
  bubbleSort: function(array) {
    var sorted = false;
    while (!sorted) {
      sorted = true;
      for (var i = 0; i < array.length - 1; i++) {
        console.log("bubble");
        if (array[i] > array[i + 1]) {
          sorted = false;
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
    return array;
  },

  mergeSort: function(array) {
    console.log("merge");
    if (array.length < 2) return array;

    var m = Math.floor(array.length / 2);
    var left = this.mergeSort(array.slice(0, m));
    var right = this.mergeSort(array.slice(m));

    return this.merge(left, right);
  },

  merge: function(a, b) {
    var result = [];

    while (a.length > 0 && b.length > 0) {
      result.push(a[0] < b[0] ? a.shift() : b.shift())
    }

    if (a.length > 0) {
      return result.concat(a);
    }
    if (b.length > 0) {
      return result.concat(b);
    }
  },

  bucketSort: function(array) {
    var counts = {}
    var result = [];

    for(var i = 0; i < array.length; i++) {
      if (counts[array[i]]) {
        counts[array[i]]++;
      } else {
        counts[array[i]] = 1;
      }
    }

    for(var c in counts) {
      for(var i = 0; i < counts[c]; i++)
        result.push(c);
    }
    return result;
  }
}


// var a = [1,2,5,6,8,42];

// var a = [];
// for (var i = 0; i < 1000; i++) {
//   a.push(i);
// }
// console.log(Searcher.linear(a, 999));
// console.log(Searcher.binary(a, 999));

var a = [9, 1, 5, 6, 3, 5, 2];
console.log(Sorter.bubbleSort(a))
console.log(Sorter.mergeSort(a))
console.log(Sorter.bucketSort(a))
Searcher = {
  linear: function(array, element) {
    for(var i = 0; i < array.length; i++) {
      console.log("linear");
      if (array[i] == element) {
        return i;
      }
    }
    return -1;
  },

  binary: function(array, element) {
    return this.binarySearch(array, element, 0, array.length - 1);
  },

  binarySearch: function(array, element, s, e) {
    console.log("binary")
    var m = Math.floor((s + e) / 2);
    if (array[m] == element) {
      return m;
    } else if (array[m] > element) {
      return this.binarySearch(array, element, s, m - 1);
    } else {
      return this.binarySearch(array, element, m + 1, e);
    }
  }
}

Sorter = {
  bubbleSort: function(array) {
    var sorted = false;
    while (!sorted) {
      sorted = true;
      for (var i = 0; i < array.length - 1; i++) {
        console.log("bubble");
        if (array[i] > array[i + 1]) {
          sorted = false;
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
    return array;
  },

  mergeSort: function(array) {
    console.log("merge");
    if (array.length < 2) return array;

    var m = Math.floor(array.length / 2);
    var left = this.mergeSort(array.slice(0, m));
    var right = this.mergeSort(array.slice(m));

    return this.merge(left, right);
  },

  merge: function(a, b) {
    var result = [];

    while (a.length > 0 && b.length > 0) {
      result.push(a[0] < b[0] ? a.shift() : b.shift())
    }

    if (a.length > 0) {
      return result.concat(a);
    }
    if (b.length > 0) {
      return result.concat(b);
    }
  },

  bucketSort: function(array) {
    var counts = {}
    var result = [];

    for(var i = 0; i < array.length; i++) {
      if (counts[array[i]]) {
        counts[array[i]]++;
      } else {
        counts[array[i]] = 1;
      }
    }

    for(var c in counts) {
      for(var i = 0; i < counts[c]; i++)
        result.push(c);
    }
    return result;
  }
}


// var a = [1,2,5,6,8,42];

// var a = [];
// for (var i = 0; i < 1000; i++) {
//   a.push(i);
// }
// console.log(Searcher.linear(a, 999));
// console.log(Searcher.binary(a, 999));

var a = [9, 1, 5, 6, 3, 5, 2];
console.log(Sorter.bubbleSort(a))
console.log(Sorter.mergeSort(a))
console.log(Sorter.bucketSort(a))
