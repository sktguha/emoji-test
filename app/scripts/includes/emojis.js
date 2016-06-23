const Emojis = function () {

  function init() {
    let theObject = {};

    $.getJSON('../data/test.json', function (data) {

      // for (let item in data) {
      //   console.log(data[item].x);
      // }
      var arr = [];
      for (var i in data) {
        var a = data[i];
        var key = a.x * 100;
        a.key = i;
        arr[key] = arr[key] || [];
        arr[key].push(a);
      }

      var farr = arr.map(function (a) {
        return a.sort(function (a, b) {
          return parseFloat(a.y) > parseFloat(b.y) ? 1 : -1
        })
      });


      var final = [];
      farr.forEach(function (fa, x) {
        final = final.concat(fa);
      });

      // console.log(final);


      $.getJSON('../data/emojis.map.json', function (data2) {
        var hashMap = {};
        for (let i in data2) {
          var obj = data2[i];
          hashMap[obj.unicode] = i;
        }
        var finalRes = '';
        final.forEach(function (fn) {

          var ob = {};

          var key = fn.key;

          ob[key] = hashMap[fn.key];
          finalRes += `"${key}":"${hashMap[fn.key]}",\n`;
        });

        // for (let i = 0; i < finalRes.length; i++) {
        //   console.log(finalRes[i]);
        // }
        window.finalRes = finalRes;
        // console.log(JSON.stringify(finalRes));


      });

    });
  }

  return {
    init
  }
}();
