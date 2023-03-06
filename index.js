var msj = document.querySelector('#msj')
var gifs=document.querySelector('#gifs')
var srchsmile=document.querySelector('.srchsmile')
const firebaseConfig = {
    apiKey: "AIzaSyCZRd8f6OPNvFGKaCmI1HrFpY03T0XYcqU",
    authDomain: "onlinechat-b51ac.firebaseapp.com",
    databaseURL: "https://onlinechat-b51ac-default-rtdb.firebaseio.com",
    projectId: "onlinechat-b51ac",
    storageBucket: "onlinechat-b51ac.appspot.com",
    messagingSenderId: "973219685659",
    appId: "1:973219685659:web:0ee02a3f4acf7b7af71fbe"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

var users = [
    {
        ad: "faiq",
        parol: "123"
    },
    {
        ad: "cavid",
        parol: "123"
    },
    {
        ad: 'ibrahim',
        parol: '123'
    }
]
$('#enter').on('click', function () {
    var ad = $('#ad').val()
    var sifre = $('#sifre').val()
    for (let i = 0; i < users.length; i++) {
        if (users[i].ad == ad && users[i].parol == sifre) {
            $('.loginpage').fadeOut(1000)
            $('.chatpage').fadeIn(1000)
        }
    }
})
$('#send').on('click', function () {
    db.ref('onlinechat/').set({
        ad: ad.value,
        mesaj: msj.value
    })
    
})
db.ref('onlinechat/').on('value', function (snapshot) {
    var x = snapshot.val()
    var p = $('<p>')
    p.text(`${x.ad} :   ${x.mesaj}`)
    $('.messagearea').append(p)
})

$('#btnsrch').on('click', function () {
    var text=$('.srchsmile').val()
    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=Y8xkGYLtAuNF2n4tzF2AZqSoJLoURC6n&q=${text}&limit=24&offset=0&rating=g&lang=en`
    }).then(function(response){
        for(var i=0;i<response.data.length;i++){
            var img=document.createElement('img')
           img.setAttribute('src',response.data[i].images.original.url)
           $('.smiles').append(img)
        }
    }).catch(function(error){
        alert(error)
    })
})

$('#gifs').on('click',function(){
    $('.smiles').css('display','block');
})

$('#gifs').dblclick(function(){
    $('.smiles').css('display','none');
})

$(document).on('click','img',function(){
    alert('sakan')
    $('.messagearea').append(this)
})