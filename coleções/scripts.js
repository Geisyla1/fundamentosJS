//maps
const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));

//segundo exemplo
const meuArray = [30, 30, 40,5,223,2049,3034,5];
function valoresUnicos(arr){
    const myset = new Set(arr);
    return [...myset];
}
console.log(valoresUnicos(meuArray));