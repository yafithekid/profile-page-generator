var Phone = /[0-9]{9,12}/;

var Contact = schema({
    name: String,
    phone: Phone
});

var Map = schema({
    lat: Number,
    lng: Number,
    name: String
});

var Component = schema({
    '?id': String,
    type: ['map','contact'],
    content : [Map,Contact]
});

var Main = schema({
    components: Array.of(Component)
});