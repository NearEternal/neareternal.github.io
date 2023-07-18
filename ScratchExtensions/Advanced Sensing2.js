//importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js')

class AdvancedSensing {
  constructor () {}

  getInfo () {
    return {
      id: 'advancedsensing',
      name: 'Advanced Sensing',
      color1: '#2e8eb8',
      
      blocks: [
        {
          opcode: 'touchingClone',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'touching clone [VALUE] of [SPRITE]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            },
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Sprite2',
              menu: 'spriteMenu'
          }
          }
        },
        {
          opcode: 'distanceToClone',

          blockType: Scratch.BlockType.REPORTER,

          text: 'distance to clone [VALUE] of [SPRITE]',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            },
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Sprite1'
            }
          }
        }
      ],
      menus: {
            spriteMenu: ['Sprite1', 'Sprite2', 'Sprite3'] //Working --> ['donamic 1', 'somee', '3'] {text:"press",value:1}, {text:"release",value:0}
        }
    }
  }

  touchingClone ({ VALUE, SPRITE }) {
    //return ({SPRITE}).isTouching({VALUE})
      //.then(value => value || '')
  }

  distanceToClone ({ VALUE, SPRITE }) {
    //return localforage.setItem(NAME, VALUE)
  }
}

Scratch.extensions.register(new AdvancedSensing())
