export function replaceCamelWithSpace(colorName){
    return colorName.replace(/\B([A-Z])\B/g,' $1');
}