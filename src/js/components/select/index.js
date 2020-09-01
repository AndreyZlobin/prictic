import {Select} from "./select"

const select = new Select('#select', {
    placeholder: 'Введите элемент',
    selectedId: '4',
    data: [
        {id: '1', value: 'option1'},
        {id: '2', value: 'option2'},
        {id: '3', value: 'option3'},
        {id: '4', value: 'option4'},
        {id: '5', value: 'option5'},
    ],
    onSelect(item) {
        console.log('selected item ', item)
    }
})
window.s = select

export default {select}