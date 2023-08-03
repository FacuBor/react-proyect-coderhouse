import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json' }
import { dataBase } from './config.js'
import { collection, addDoc } from 'firebase/firestore'

const productsRef = collection(dataBase, "productos")


MOCK_DATA.forEach(item =>{
    delete item.id

    addDoc(productsRef, item)
})









