/*global Phaser*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {}

game_state.main = function() {};
game_state.main.prototype = {

    preload: function() {
        game.load.spritesheet("freeway", "assets/freeway.png", 800, 600);
        game.load.spritesheet("bluecar", "assets/bluecar.png", 75, 120);
    },

    create: function() {
        game.stage.backgroundColor = "#D3D3D3";
        this.freeway = game.add.sprite(0, 0, "freeway");
        this.freeway.animations.add("driving", [2, 1, 0], 10, true);
        // this.freeway.animations.play("driving");
        
        
        /* Lane Spaces
            Lane 1: 75 - 150
            Lane 2: 180 - 255
            Lane 3: 295 - 370
            Lane 4: 415 - 490
            Lane 5: 540 - 615
            Lane 6: 655 - 730
        */
        
        
        this.cars = game.add.group();
        let tempcar = this.cars.create(75, 200, "bluecar");
        
        
        

    },

    update: function() {

    },

}
game.state.add('main', game_state.main);
game.state.start('main');