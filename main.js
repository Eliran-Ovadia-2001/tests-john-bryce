function AddProduct() {
    const ProductName = document.getElementById("ProductName")
    const ProductPrice = document.getElementById("ProductPrice")
    const ProductCategory = document.getElementById("ProductCategory")
    const ProductImage = document.getElementById("ProductImage")
    const ProductList = document.getElementById("ProductList")

    const name = ProductName.value
    const price = ProductPrice.value
    const category = ProductCategory.value
    const image = ProductImage.value

    const NameErr = document.getElementById("NameErr")
    const PriceErr = document.getElementById("PriceErr")
    const CategoryErr = document.getElementById("CategoryErr")
    const ImageErr = document.getElementById("ImageErr")

    NameErr.innerText = " "
    PriceErr.innerText = " "
    CategoryErr.innerText = " "
    ImageErr.innerText = " "

    if(name ==! " ") {
        event.preventDefault()
        ProductName.focus()
        NameErr.innerText = "Invaild Product Name"
        return
    }

    if(price ==! " " || price < 1) {
        event.preventDefault()
        ProductPrice.focus()
        PriceErr.innerText = "Invaild Product Price"
        return
    }

    if(category ==! " ") {
        event.preventDefault()
        ProductCategory.focus()
        CategoryErr.innerText = "Invaild Product Category"
        return
    }

    if(image ==! " ") {
        event.preventDefault()
        ProductImage.focus()
        ImageErr.innerText = "Invaild Image Link"
        return
    } else {
        let html = `
                        <tr>
                            <td>${name}</td>
                            <td>${price}</td>
                            <td>${category}</td>
                            <td><img src="${image}"</td>
                            <td><input type="button" name="del" value="Delete" onclick="delValue(this);"></td>
                        </tr>
                    `
                ProductList.innerHTML += html
                ClearValues()
    }
}

function ClearValues() {
    document.getElementById("ProductName").value = " "
    document.getElementById("ProductPrice").value = " "
    document.getElementById("ProductCategory").value = " "
    document.getElementById("ProductImage").value = " "
}

function delValue(del) {
    if(confirm("Are You Sure You Want To Delete?") == true) {
        const s = del.parentNode.parentNode
    s.parentNode.removeChild(s)
    }
}