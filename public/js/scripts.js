$('#meniu-hamburger').on('click', function(){
    console.log('a da click');
    $('.meniu-lg-display').show();
})

$('#close-button').on('click', function(){
    // console.log('a da click');
    $('.meniu-lg-display').hide();
})
function initMap() {
    // The location of Uluru
    var uluru = {lat: 44.4271287, lng: 26.10025};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    }
