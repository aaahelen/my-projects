
$('#button_open').hide()

$('#button_close').on('click', (event) => {
    $('div').fadeOut('slow')
    $('#button_close').hide()
    $('#button_open').show()
})
$('#button_open').on('click', (event) => {
    $('div').fadeIn('slow')
    $('#button_close').show()
    $('#button_open').hide()
})

