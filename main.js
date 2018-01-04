$(window).load(function(){
    console.log('asidhsa');
    function request(lang){
        $.ajax({
            type: "GET",
            url: 'http://www.ecoponte.com.br/Xml/TempoViagem.xml?v=43',
            dataType: "xml",
            success:parseXml
        });
    }

    function parseXml(xml){
        console.log(xml);
        $(xml).find('RIODEJANEIRO').each(function(){
            var nit = $(this).attr('MINUTOS');
            console.log('sentido niteroi voce leva: '+nit+' minutos');
            $('.corpo').append('<h1>voce levara'+nit+' minutos')
        });
        $(xml).find('NITEROI').each(function(){
            var rio = $(this).attr('MINUTOS');
            console.log('sentido rio voce leva: '+rio+' minutos');
        });
    }
    request();

});
