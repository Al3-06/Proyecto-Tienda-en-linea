let btns = document.querySelectorAll('#btn-search');
let views = document.querySelectorAll('#view');


btns.forEach(btn => {
    btn.addEventListener('click', function () {
        views.forEach(view => {
            view.classList.remove('view-cont--active');
        })
        btns.forEach(btn => {
            btn.classList.remove('nav-lateral__btn--active');
        })
        let target = btn.ariaLabel;
        views.forEach(view => {
            let targetView = view.ariaLabel
            if (target === targetView) {
                view.classList.add('view-cont--active');
                btn.classList.add('nav-lateral__btn--active');
            }
        })

    })
})

const bodyElement = document.body;
const btnModeView = document.getElementById('btnView');
const btnModeTables = document.getElementById('btnTables');

btnModeView.addEventListener('change', function () {
    console.log(this.checked);
    if (this.checked) {
        bodyElement.classList.add('dark-theme');
        localStorage.setItem('themeView', 'dark');
    }
    else {
        bodyElement.classList.remove('dark-theme');
        localStorage.setItem('themeView', 'light');
    }
})
const tableProducts = document.getElementById('table-products');
const btnsTableProducts = document.querySelectorAll('#table__btn');
const tableOrders = document.getElementById('table-orders');

btnModeTables.addEventListener('change', function () {
    if (this.checked) {
        tableProducts.classList.remove('table-light');
        tableProducts.classList.add('table-dark');
        btnsTableProducts.forEach(btn => {
            console.log('Cambia color')
            btn.classList.remove('table__btn');
        })
        tableOrders.classList.remove('table-light');
        tableOrders.classList.add('table-dark');
        localStorage.setItem('themeTables', 'dark');
    }
    else {
        tableProducts.classList.add('table-light');
        tableProducts.classList.remove('table-dark');
        btnsTableProducts.forEach(btn => {
            console.log('white')
            btn.classList.add('table__btn');
        })
        tableOrders.classList.add('table-light');
        tableOrders.classList.remove('table-dark');
        localStorage.setItem('themeTables', 'light');
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const themeView = localStorage.getItem('themeView');
    const themeTables = localStorage.getItem('themeTables')

    if (themeView === 'dark') {
        bodyElement.classList.add('dark-theme');
        btnModeView.checked = true;
    }
    else if (themeView === 'light') {
        bodyElement.classList.remove('dark-theme');
        btnModeView.checked = false;
    }
    if (themeTables === 'dark') {
        tableProducts.classList.remove('table-light');
        tableProducts.classList.add('table-dark');
        btnsTableProducts.forEach(btn => {
            btn.classList.remove('table__btn');
        })
        tableOrders.classList.remove('table-light');
        tableOrders.classList.add('table-dark');
        btnModeTables.checked = true;
    }
    else if (themeTables === 'light') {
        tableProducts.classList.add('table-light');
        tableProducts.classList.remove('table-dark');
        btnsTableProducts.forEach(btn => {
            btn.classList.add('table__btn');
        })
        tableOrders.classList.add('table-light');
        tableOrders.classList.remove('table-dark');
        btnModeTables.checked = false;
    }
})