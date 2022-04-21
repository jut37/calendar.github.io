window.addEventListener('load', function () {
    let content = document.getElementById('content');
    let date = document.getElementById('date');
    let time = document.getElementById('time');
    let create_btn = document.getElementById('create_btn');
    let delete_btn = document.getElementById('delete_btn');
    let list_container = document.getElementById('list_container');

    const list = [];

    function render() {

        let item_text = '';
        list.forEach(function (item) {
            item_text = item_text + `
            <div class="item">
                <p>時間: ${item.date}  ${item.time}</p>
                <p>內容: ${item.content}</p>
            </div>
            `
        })
        list_container.innerHTML = item_text;

    }

    create_btn.addEventListener('click', function () {

        list.push(
            {
                content: content.value,
                date: date.value,
                time: time.value
            }
        )
        console.log(list);
        render();

    })

    delete_btn.addEventListener('click', function () {

        list.pop()
        render();

    })
})