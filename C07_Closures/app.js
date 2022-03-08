function count() {
    let x = 0;
  
    return {
      increment: function() { ++x; },
      decrement: function() { --x; },
      get: function() { return x; },
      reset: function() { x = 0; }
    }
  }

let test = count();
console.log(test.get());
console.log(test.increment());
console.log(test.get());

// function jump() {
//     var height = 10;
  
//     function scream() {
//       console.log(height);
//     }
  
//     return scream;
//   }

//   var newJump = jump();
//   newJump();

// =======      OBJECTS

function University(name, location, state) {
    this.name = name;
    this.location = location;
    this.state = state;
}

const myUniverstiy = new University('SEMO', 'Cape', 'MO');
console.log(myUniverstiy.location)
console.log(ma);

// <------------======= CONTENT HEADING ======------------->

