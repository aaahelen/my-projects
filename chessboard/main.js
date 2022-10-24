/*Variables */
let arr, table;
const FIGURESYMBOL = {
	king: {
		white: '&#9812;',
		black: '&#9818;'
	},	
	queen: {
		white: '&#9813;',
		black: '&#9819;'
	},
	rook: {
		white: '&#9914;',
		black: '&#9820;'
	},
	bishop: {
		white: '&#9815;',
		black: '&#9821;'
	},
	knight: {
		white: '&#9816;',
		black: '&#9822;'
	},
	pawn: {
		white: '&#9817;',
		black: '&#9823;'
	},
};

let figureset = [];

/* main */
document.addEventListener("DOMContentLoaded', funetion() (
	arr = document. querySelectorAll ('td');
	
	

/* functions */

function getCellFromPosition(position) {
	for (const cell of arr) {
	if (getCellindex(cell) == position) return cell;

	}
	throw "Несуществующие координаты" + position;
}
function getCellIndex(cell) {
	let idx = arr.indexOf.call(arr, click.target);
	let vert = [8, 7, 6, 5, 4, 3, 2, 1] [Math.floor(idx / 8)];
	let hor = 'abcdefg'[idx % 8];
	return vert + hor;
}
function useCell(cell) {
	if (!document.querySelector('.cellfrom')) || document.querySelector('.cellto')){
	document .querySelector('.cellfrom') .classList.remove('cellfrom') +
	document .querySelector('.cellto') .classList.remove('cellto');
	cell.classList .add('cellfrom');

	console.log('from -->');
	let pos = getCellPosition(cell) ;
	console.log(pos) ;

	for (let f of figureset) {

  

	

/* classes*/
class ChessFigure {
	constructor (name, color, position) {
		this.name = name;
		this.color = color;
		this.position = position.toLowerCase();
	}
	render () {
		arr[getCellFrom Positidn(this.position)].innerHTML = FIGURESYMBOL[this.name] [this.color];
		this.clear = function() {
		arr(getCellSelector(this.position)).innerHTML = '';
	};
}	