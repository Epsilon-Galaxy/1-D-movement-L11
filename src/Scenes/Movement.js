class Movement extends Phaser.Scene{
    constructor(){
        super("movementScene");
        this.my = {sprite: {}}


    }

    preload(){
        this.load.setPath("./assets/");
        this.load.image("mCPurple", "character_squarePurple.png");
        this.load.image("projectile", "tile_arrowUp.png");
    }

    create(){
        let my = this.my;
        console.log("test");

        my.sprite.mainCharacter = this.add.sprite(400, 500, "mCPurple");

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        my.sprite.projectile = this.add.sprite(400,500, "projectile");
        my.sprite.projectile.visible = false;
        
    }

    update(){
        let my = this.my;
        if(this.aKey.isDown){
            my.sprite.mainCharacter.x -= 5;
            if (my.sprite.mainCharacter.x <= 0) my.sprite.mainCharacter.x = 0;
        }
        if(this.dKey.isDown){
            my.sprite.mainCharacter.x += 5;
            if(my.sprite.mainCharacter.x >=800) my.sprite.mainCharacter.x = 800;
        }

        if(Phaser.Input.Keyboard.JustDown(this.spaceKey)){
            console.log("testtest");
            if(my.sprite.projectile.visible == false){
                my.sprite.projectile.visible = true;
                my.sprite.projectile.x = my.sprite.mainCharacter.x;
                my.sprite.projectile.y = my.sprite.mainCharacter.y;   
            }
        }

        if(my.sprite.projectile.visible == true){
            my.sprite.projectile.y -= 30;
            if(my.sprite.projectile.y <= 0){
                my.sprite.projectile.visible = false;
            }
        }
    }
}