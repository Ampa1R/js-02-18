Vue.component('request-err', {
    props: ['ermsg'],
    template: `
        <p>Ошибка {{ermsg}}</p>
    `
});