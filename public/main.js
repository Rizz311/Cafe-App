var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        element.classList.add("complete")
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const customer = this.parentNode.parentNode.childNodes[5].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        const size = this.parentNode.parentNode.childNodes[9].innerText
    const cream = this.parentNode.parentNode.childNodes[11].innerText
    const milk = this.parentNode.parentNode.childNodes[13].innerText
    const sugar = this.parentNode.parentNode.childNodes[15].innerText

        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp,
            'customer':customer

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(this.parentNode.parentNode.childNodes[5].innerText)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
