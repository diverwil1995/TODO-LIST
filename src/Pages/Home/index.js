const content = document.getElementById('content')
const datetime = document.getElementById('datetime')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')
const listContent = []

function render() {
    let htmlStr = ''
    listContent.forEach(function(item) {
        htmlStr += `
        <div class="item">
            <div>
                <p>記事內容：${item.content}</p>
                <p>日期：${item.datetime}</p>
            </div>
        </div>
        `
    })
    list.innerHTML = htmlStr
}

addedBtn.addEventListener('click', function() {
    listContent.unshift({
        content: content.value,
        datetime: datetime.value
    })
    render()
})

deletedBtn.addEventListener('click', function() {
    listContent.pop()
    render()
})