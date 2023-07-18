//importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js')
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const TargetType = require('../../extension-support/target-type');

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
              defaultValue: '1',
              menu: 'spriteMenu'
            },
            SPRITE: {
              type: Scratch.ArgumentType.NOTE,
              defaultValue: 'Sprite1'
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
            spriteMenu: 'getSpriteNames'
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

getSpriteNames () {
  var spriteNames = [];
for (var i in Scratch.vm.runtime.targets) {
  var target = Scratch.vm.runtime.targets[i];
if (target.hasOwnProperty('isStage') && !target.isStage) {
    spriteNames.push(target.sprite.name);
  }
}
    return ['dynamic 1', 'dynamic 2', 'dynamic 3']; //JSON.stringify(spriteNames)
}
}

Scratch.extensions.register(new AdvancedSensing())
