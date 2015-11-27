var Phone = /[0-9]{9,12}/;

var Date = schema({
    day: Number.min(1).max(31),
    month: Number.min(1).max(12),
    year: Number
});

var Contact = schema({
    name: String,
    phone: Phone
});

var Map = schema({
    lat: Number,
    lng: Number,
    name: String
});

var Event = schema({
    imageurl: String,
    title: String,
    subtitle: String,
    description: String,
    start: Date,
    '?end': Date
});

var Experience = schema({
    title: String,
    events: Array.of(Event)
});

var Component = schema({
    '?id': String,
    type: ['map','contact','experience'],
    content : [Map,Contact,Experience]
});

var Main = schema({
    components: Array.of(Component)
});