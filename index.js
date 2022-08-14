const menuToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav');

menuToggle.onclick = () => {
    navigation.classList.toggle('open');
}

const listItems = document.querySelectorAll('.list-item');

listItems.forEach(item => {
    item.onclick = () => {
        listItems.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    }
})