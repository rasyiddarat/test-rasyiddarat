const name = {
  firstName: 'harun',
  middleName: 'al',
  lastName: 'rasyid'
}

console.info(`${firstName} ${middleName} ${lastName}`)

function cetakNama(firstName, middleName, lastName) {
	console.info(`${firstName} ${middleName} ${lastName}`)
}

cetakNama('harun','al','rasyid')

const {firstname,middleName,lastName} = name
