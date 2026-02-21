function readfile(file){
    const reader = new FileReader()

    reader.onload = function(e){
        const imgPreview = document.getElementById('img-preview')
        imgPreview.src = e.target.result
    }
    reader.readAsDataURL(file)
}

const input = document.getElementById('img-input')
input.addEventListener('change', function(){
    const file = this.files[0]
    if(file){
        readfile(file)
    }
})