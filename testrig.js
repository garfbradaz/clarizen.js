function CarDoor( options ) {
  this.color = options.color || 'red';
  this.side = options.side || 'right';
  this.hasPowerWindows = options.hasPowerWindows || true;
}

function CarSeat( options ) {
  this.color = options.color || 'gray';
  this.material = options.material || 'leather';
  this.isReclinable = options.isReclinable || true;
}

function CarPartFactory() {}
CarPartFactory.prototype.createPart = function createCarPart( options ) {
  var parentClass = null;
  
  if( options.partType === 'door' ) {
    parentClass = CarDoor;
  } else if( options.partType === 'seat' ) {
    parentClass = CarSeat;
  }
  
  if( parentClass === null ) {
    return false;
  }
  
  return new parentClass( options );
}