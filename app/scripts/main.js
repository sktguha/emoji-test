const App = function () {

  function init() {

    $.getJSON('../data/data.json', function (data) {
        console.log(data);

      for (let i in data) {

        let an = data[i];

        for (let j in an) {
          $('#app').append(`<span class="emoji-${an[j]}"></span>`);
        }

      }
    });

  }

  return {
    init
  };
}();

(function () {
    App.init();
}());
