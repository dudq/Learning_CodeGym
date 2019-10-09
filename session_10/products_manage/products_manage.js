let app = new function () {
    this.el = document.getElementById("products");
    this.products =['Macbook','Dell','Hp','Asus','Acer'];
    this.count = function (data) {
        let el = document.getElementById("counter");
        let name = 'product';
        if (data){
            if (data>1){
                name = 'products';
            }
            el.innerHTML = data +' '+name;
        } else {
            el.innerHTML = 'No'+ name;
        }
    };
    this.displayAll = function () {
        let data ='';
        if (this.products.length>0){
            for (let i=0;i<this.products.length;i++){
                data +='<tr>';
                data +='<td>'+this.products[i]+'</td>';
                data +='<td><button onclick="app.edit('+i+')">Edit</button></td>';
                data +='<td><button onclick="app.delete('+i+')">Delete</button></td>';
            }
        }
        this.count(this.products.length);
        return this.el.innerHTML = data;
    };
    this.add = function () {
        let el = document.getElementById("add_name");
        let product = el.value;
        if (product){
            this.products.push(product.trim());
            el.value;
            this.displayAll();
        }
    };
    this.edit =function (item) {
        let el = document.getElementById('edit_name');
        el.value = this.products[item];
        document.getElementById('spoiler').style.display ='block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function () {
            let product = el.value;
            if (product){
                self.products.splice(item,1,product.trim());
                self.displayAll();
                closeInput();
            }
        }
    }

};
app.displayAll();
function closeInput() {
    document.getElementById('spoiler').style.display = 'none';
}