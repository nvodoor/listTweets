
var click = document.getElementById('click')



function getLoc() {

    var location = document.getElementById('locate')

    var loc = location.value

    var arr = []

    fetch('https://desolate-crag-37715.herokuapp.com/'+loc)
        .then(function (res) {
            return res.json()
        }).then(function (data) {
            data['features'].forEach(function (feature) {
                var obj = {}
                obj['message'] = feature['properties']['message']
                obj['screen_name'] = feature['properties']['screen_name']
                arr.push(obj)
            })
        }).then(function () {
        var ul = document.getElementById('list')
        arr.forEach(function (ele) {
            var li = document.createElement('li')
            li.innerText = ele['screen_name']+": "+ ele['message']
            ul.appendChild(li)
        })
    })
}

click.addEventListener('click', getLoc)