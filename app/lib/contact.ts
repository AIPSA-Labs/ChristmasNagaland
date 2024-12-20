
const contact = [
    '+918330816641',
    '+917025833332'
]

function getRandomItem<T>(array: T[]): T {
    if (array.length === 0) {
      throw new Error("Array is empty");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

function getContact() {
    const number = getRandomItem(contact)
    return number;
}

export default getContact;