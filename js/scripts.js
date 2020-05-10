const endpoint = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";


var settings = {
    "url": endpoint,
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    // console.log(response);
    response.map( (item) => {
        let name = item.name;
        let price = item.price + ",00";
        let photo = item.photo;
        let property_type = item.property_type;
        photo = photo.replace("xx_large", "medium");
        photo = photo.replace("x_large", "medium");
        console.log(photo);
        let card = `<div class='col-md-3 habitacion'>
                        <img alt='${name}' src='${photo}' />
                        <h3 class='card-name'>${name}</h3>
                        <h1 class='card-price'>Preço R$ ${price}</h1>
                        <label class='card-type'>${property_type}</label>
                        <p><a class='btn' href='#''>Detalhes »</a></p>
                    </div>`;
        $("#habitaciones").append(card);
    })
});