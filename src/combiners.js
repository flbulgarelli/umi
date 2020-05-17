function readData(component, key) {
  return component.$.data(key);
}

function findChild(component, klass) {
  return component.$.find(klass);
}

function onceAndOnChange(component, f) {
  component.onChange(f);
  f();
}

class Property {
  constructor(klass, key) {
    this.klass = klass;
    this.key = key;
  }

  value(component) {
    return readData(component, this.key) || findChild(component, this.klass);
  }
}

module.exports = {
  readData,
  findChild,
  onceAndOnChange,
  Property
}
