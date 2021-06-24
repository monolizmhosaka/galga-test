controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`firework2`, spacePlane, 200, 0)
})
let hogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(assets.image`plane0`, SpriteKind.Player)
spacePlane.setStayInScreen(true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    hogey = sprites.create(assets.image`skellyWalkLeft1`, SpriteKind.Enemy)
    hogey.setVelocity(-100, 0)
    hogey.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    hogey.setFlag(SpriteFlag.AutoDestroy, true)
    sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy()
        info.changeLifeBy(-1)
    })
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
        otherSprite.destroy()
        sprite.destroy(effects.fire, 100)
        info.changeScoreBy(1)
    })
})
