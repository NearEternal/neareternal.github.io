var spriteNames = [];
for (var i in Scratch.vm.runtime.targets) {
  var target = Scratch.vm.runtime.targets[i];
  if (target.hasOwnProperty('isStage') && !target.isStage) {
    spriteNames.push(target.sprite.name);
  }
}
var spriteJSON = JSON.stringify(spriteNames);
