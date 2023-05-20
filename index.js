
function mapChange (x) {
    let url = document.getElementById('urlid');
    let map1 = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.276525976521!2d106.833286!3d-6.227226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ee272f7635%3A0xd39f3240fe640937!2sBLOCK71%20Jakarta!5e0!3m2!1sen!2sid!4v1684505347942!5m2!1sen!2sid'
    let map2 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0634573096427!2d106.85385607395254!3d-6.255370661242966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ad6769dc4f%3A0x2697c38181bd4f97!2sWoodland%20Park%20Residence%20Apartment!5e0!3m2!1sen!2sid!4v1684511427989!5m2!1sen!2sid'
    let map3 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3384083519286!2d106.66049787395195!3d-6.219028060909128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9633de7e6e7%3A0x6077e13814a0a28f!2sIkea%20Alam%20Sutera%2C%20Jl.%20Nean%20Saba%2C%20RT.002%2FRW.003%2C%20Kunciran%2C%20Kec.%20Pinang%2C%20Kota%20Tangerang%2C%20Banten%2015144!5e0!3m2!1sen!2sid!4v1684511557050!5m2!1sen!2sid'

    switch(x) {
        case 1:
            url.setAttribute('src', map1);
            break;
        case 2:
            url.setAttribute('src', map2);
            break;
        case 3:
            url.setAttribute('src', map3);
            break;
    }
}