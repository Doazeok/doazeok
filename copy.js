ko.validation.init();

ko.validation.rules['lenght'] = {
          validator: function(val) {
            if (val) {
              return val.length <= 3
            }else{
              return true
            }
          },
            message: 'Не больше тысячи'

          };

ko.validation.registerExtenders();

var ViewModel = function() {
  var self = this;
  self.check = ko.observable(false);//for checked

  // товар
  self.goods = ko.observable().extend({required: {message: 'Сделайте выбор'}});
  // количество
  self.amount = ko.observable().extend({
        required: {message: 'Заполните поле'},
        lenght: '',
        digit: {params: true, message: 'Только целое число' },});
  // чекбокс
  self.delivery = ko.observable(false);
  // страна
  self.country = ko.observable().extend({
        required: {message: 'Заполните поле'},
        pattern: {
                 params: '^[A-zА-яЁё]+$',
                 message: 'Только буквы'
            },
        });
  // город
  self.city = ko.observable('').extend({
        required: {message: 'Заполните поле'},
        pattern: {
                 params: '^[A-zА-яЁё]+$',
                 message: 'Только буквы'
            },
        });
  //checked
    //дом
      self.house = ko.observable().extend({
        required: 
                {onlyIf:
                function() {return self.check() == true;},
                message: 'Сделайте выбор'},
        lenght: '',
        digit: {params: true, message: 'Только целое число' },
      });
  //квартира
      self.apartment = ko.observable().extend({
        required: 
                {onlyIf:
                function() {return self.check() == true;},
                message: 'Сделайте выбор'},
        lenght: '',
        digit: {params: true, message: 'Только целое число' },
      });

  //product 
    self.list = ko.observableArray();
    self.products = ko.observableArray([
      {name: 'Белый нефрит', price: 123}, 
      {name: 'Хризопрас', price: 286},
      {name: 'Авантюрин', price: 350},
      {name: 'Аквамарин', price: 1423},
      {name: 'Гессонит', price: 2320},
      {name: 'Бледный алмаз', price: 4256},
      {name: 'Рубин', price: 4563},
      {name: 'Зелёный алмаз', price: 5245},
      {name: 'Жёлтый алмаз', price: 6353},
      {name: 'Звёздчатый сапфир', price: 7245},
      ]);


  //funcs
    self.remove = function() {
          self.list.remove(this);
      };//--X--

    self.submit = function() {
      if (viewModel.errors().length === 0) {
        clickBtnOK()
        }
      else {
        viewModel.errors.showAllMessages();
        clickBtnNook()
        }
      };//submit


   
  };//ViewModel

var viewModel = new ViewModel();
ko.applyBindings(viewModel);

viewModel.errors = ko.validation.group(viewModel);
////////////////////////////////////////////////////////KO

//+тире в странах-городах-домах, названия с большой буквы, 

// ...........................Чекбокс
  function checChange () {
        var dis = document.getElementById("dis");
        if(dis.disabled) 
          dis.disabled=false
        else 
          dis.disabled=true

        if(viewModel.check() == true) 
          viewModel.check(false)
        else 
          viewModel.check(true);

  };


// .......................................Кнопка субмит
  var p = -1;

  // p нужен для уникальности каждого viewModel.list
  // элемента, чтобы remove удалил его по значению.
  // может поменять на afterAdd $index
  // http://knockoutjs.com/documentation/foreach-binding.html
  var clickBtnOK =  function () {
  //добавление элемента в лист
    p++;
    var a = {
      name: p,
      goods: viewModel.goods(),
      amount: viewModel.amount(),
      country: viewModel.country(),
      city: viewModel.city(),

      check: viewModel.check(),
      };


    if (a.check){a.house = viewModel.house()};
    if (a.check){a.apartment = viewModel.apartment()};


    viewModel.list.push(a);
  //добавление элемента в лист
    };
//каждый пункт карзины - элемент массива list, порядок согласуется с визуальным
//цена и имя товара в list.goods



  var clickBtnNook = function () {
     var error = document.createElement('div'); 
      error.innerHTML +='<div id="error" class="alert alert-danger" role="alert">Заполните все поля правильно!</div>' 
      basket.appendChild(error);

      setTimeout(function() {
        error.parentNode.removeChild(error);
      }, 
        2000);
    };//ошибка



// test

// viewModel.goods(viewModel.products()[0])
// viewModel.amount('1')
// // viewModel.delivery(true)
// viewModel.country('asd')
// viewModel.city('sad')
// viewModel.house('12')
// viewModel.apartment('2')