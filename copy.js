var ViewModel = function() {
  this.goods = ko.observable('');
  this.amount = ko.observable('1');
  this.delivery = ko.observable(false);
  this.country = ko.observable('');
  this.city = ko.observable('');
  this.house = ko.observable('');
  this.apartment = ko.observable('');
};
var viewModel = new ViewModel();
ko.applyBindings(viewModel);
////////////////////////////////////////////////////////KO

 function del (x) {   
      x.parentNode.parentNode.removeChild(x.parentNode);
};
// ............... Удалятельная кнопка

function checChange () {
      var dis = document.getElementById("dis");
      if(dis.disabled) {
        dis.disabled=false
      } else {
        dis.disabled=true};
};
// ...............Чекбокс

var Btn = document.getElementById("Btn");
Btn.addEventListener("click", function () {
  var a = {val: viewModel.goods()};
  var b = {val: viewModel.amount()};
  var c = viewModel.delivery();
  var d = {val: viewModel.country()};
  var e = {val: viewModel.city()};
  var f = {val: viewModel.house()};
  var g = {val: viewModel.apartment()};
  var div;

////////////////////////////// проверка полей 
var checkCond = function (inp) {

    var srt; 
    var conditions = true;
    var conditionsNumb = true; //отсутствие цифр
    var conditionsWord = true;

    (function () {
        srt = inp.val.split("");
    })();

    if (!srt.length){
      conditions = false};



    srt.forEach(function(item, i, srt) {
        if ( +srt[i] > -1)
        conditionsNumb = false;
    }
    );
    srt.forEach(function(item, i, srt) {
        if (!( +srt[i] > -1))
        conditionsWord = false;
    }
    );


    if(conditions & conditionsNumb) {
      inp.con =  1 //'numb nyety'
    }else if(conditions & conditionsWord){
      inp.con =  2 //'word nyety'
    }else if(conditions){
      inp.con = 3 //'smeshannaya stroka'
    }else{
      inp.con = 4 //'stroky nety'
    };
};
checkCond(a);checkCond(b);checkCond(d);checkCond(e);checkCond(f);checkCond(g);
// console.log(a.con);console.log(b.con);
// console.log(d.con);console.log(e.con);
// console.log(f.con);console.log(g.con);
////////////////////////////// проверка полей 


  var conditionsUnDil =  (a.con !== 4)
  &&  (b.con !== 4 && b.con !== 3 && b.con !== 1) 
  &&  (d.con !== 4 && d.con !== 3 && d.con !== 2)  
  &&  (e.con !== 4 && e.con !== 3 && e.con !== 2) ;


  var conditionsDil =  (f.con !== 4 && f.con !== 3 && f.con !== 2)  
  &&  (g.con !== 4 && g.con !== 3 && g.con !== 1)  ;


if (!c) {

  if (conditionsUnDil) {
    ok();
  } else {
    nook()
  }

} else {

  if (conditionsUnDil & conditionsDil) {
    okk();
  } else {
    nook()
  }

};

function ok () {
  div = document.createElement('div');
  div.className = "alert alert-success";

  div.innerHTML =   
                    '<button  onclick="del(this)" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                   '<br>'+
                    '<div class="container-fluid">'+

                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Товар: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+


                          '<p>'+a.val+'</p>'+
                        '</div>'+
                      '</div>'+

                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Количество: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>' +(b.val? b.val: 1)+ '</p>'+
                        '</div>'+
                      '</div>'+
                      
                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>'+(c ? "С доставкой": "Без доставки")+'</p>'+
                        '</div>'+
                      '</div>'+
                      
                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Страна: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>'+d.val+'</p>'+
                        '</div>'+
                      '</div>'+
                      
                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Город: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>'+e.val+'</p>'+
                        '</div>'+
                      '</div>'+


                      '</div>' ;



  basket.appendChild(div);
};

function okk () {
  div = document.createElement('div');
  div.className = "alert alert-success";

  div.innerHTML =
                    '<button  onclick="del(this)" type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                    
                      '<div class="container-fluid">'+

                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Товар: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>'+a.val+'</p>'+
                        '</div>'+
                      '</div>'+

                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Количество: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>' +(b.val? b.val: 1)+ '</p>'+
                        '</div>'+
                      '</div>'+
                      
                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>'+(c ? "С доставкой": "Без доставки")+'</p>'+
                        '</div>'+
                      '</div>'+
                      
                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Страна: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>'+d.val+'</p>'+
                        '</div>'+
                      '</div>'+
                      
                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Город: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>'+e.val+'</p>'+
                        '</div>'+
                      '</div>'+
                      
                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Дом: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>'+f.val+'</p>'+
                        '</div>'+
                      '</div>'+
                      
                      '<div class="row">'+
                        '<div class="col-xs-7">'+
                          '<p>Квартира: </p>'+
                        '</div>'+

                        '<div class="col-xs-4">'+
                          '<p>'+g.val+'</p>'+
                        '</div>'+
                      '</div>'+


                      '</div>' ;

  basket.appendChild(div);
};

function nook () {
 var error = document.createElement('div'); 
  error.innerHTML +='<div id="error" class="alert alert-danger" role="alert">Заполните все поля правильно!</div>' 
  basket.appendChild(error);

  setTimeout(function() {
    error.parentNode.removeChild(error);}, 1000);
};


});
// ...............Кнопка субмит
