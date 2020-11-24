// Cambios de lenguaje 

var language = localStorage.getItem('language');
var default_lang = 'en';

$(document).on('click', '.langClass', function() {
  var lang = $(this).attr('data-lang');
  setLanguage(lang);
  if(lang == "es"){
    $(this).html("ENG");
    $(this).attr('data-lang','en');  
  }else{
    $(this).html("ESP");
    $(this).attr('data-lang','es');
  }
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    language = localStorage.getItem('language');
    getLanguage(language);
}

function getLanguage(language) {
    (language == null) ? setLanguage(default_lang) : false;
    $.ajax({
        url: 'lang/' + language + '.json',
        dataType: 'json', async: true
    }).done(function (lang) {
        $('html').attr('lang', language);
        $.each(lang, function (index, val) {
            (index === 'head') ? $(document).attr("title", val['title']) : false;
            $(index).children().each(function () {
                $(this).html(val[$(this).attr('key')])
            })
        })
    })
}

$(document).ready(function () {
    if (language != null && language !== default_lang){
        getLanguage(language);
    }else{
        getLanguage(default_lang);
    }
});