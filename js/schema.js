var Phone = /[0-9]{9,12}/;
var Link = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
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

var Title = schema({
    background_image : Link,
    tag_line : String,
    sub_tag_line : String,
    button : String
});

var Project = schema({
    imageurl: String,
    title: String,
    subtitle: String
});

var Portfolio = schema({
    title: String,
    description: String,
    projects: Array.of(Project)
});

var Component = schema({
    '?id': String,
    type: ['map','contact','experience','title','portfolio'],
    content : [Map,Contact,Experience,Title,Portfolio]
});

var Main = schema({
    components: Array.of(Component)
});

var dateToOutputString = function(date){
    var monthName;
    switch (date.month){
        case 1:
            monthName = "Januari";
            break;
        case 2:
            monthName = "Februari";
            break;
        case 3:
            monthName = "Maret";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "Mei";
            break;
        case 6:
            monthName = "Juni";
            break;
        case 7:
            monthName = "Juli";
            break;
        case 8:
            monthName = "Agustus";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "Oktober";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "Desember";
            break;
    }
    return date.day + " "+monthName + " "+ date.year;
};