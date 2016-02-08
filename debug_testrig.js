
function main_debug() {

    var myPartFactory = new CarPartFactory();
    var seat = myPartFactory.createPart({
        partType: 'seat',
        material: 'leather',
        color: 'blue',
        isReclinable: false
    });

    console.log(seat.material);
}