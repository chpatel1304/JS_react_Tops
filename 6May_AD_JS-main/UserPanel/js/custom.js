let tr = `
    <li class="nav-item">
        <a class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
            <span class="text-dark" style="width: 130px;">All Products</span>
        </a>
    </li>
`
let allCatData = JSON.parse(localStorage.getItem('catInfo'))
let j=1;
allCatData.map((i,index)=>{
    tr += `
     <li class="nav-item">
        <a class="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-${++j}">
            <span class="text-dark" style="width: 130px;">${i.name}</span>
        </a>
    </li>
    `
})
document.getElementById('allCat').innerHTML = tr;


let allPr = JSON.parse(localStorage.getItem('productInfo'))

let pr = '';
let allCatwisePr = '';
// allPr.map((i)=>{
//     pr += `<div class="col-md-6 col-lg-4 col-xl-3">
//             <div class="rounded position-relative fruite-item">
//                 <div class="fruite-img">
//                     <img src="${i.image}" class="img-fluid w-100 rounded-top" alt="">
//                 </div>
                
//                 <div class="p-4 border border-secondary border-top-0 rounded-bottom">
//                     <h4>${i.pname}</h4>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
//                     <div class="d-flex justify-content-between flex-lg-wrap">
//                         <p class="text-dark fs-5 fw-bold mb-0">$ ${i.price} / kg</p>
//                         <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//                     </div>
//                 </div>
//             </div>
//     </div>`
// })

//document.getElementById('allPr').innerHTML = pr


/*
<div id="tab-2" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">
                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="rounded position-relative fruite-item">
                                                <div class="fruite-img">
                                                    <img src="img/fruite-item-5.jpg" class="img-fluid w-100 rounded-top" alt="">
                                                </div>
                                                <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
                                                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div class="d-flex justify-content-between flex-lg-wrap">
                                                        <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="rounded position-relative fruite-item">
                                                <div class="fruite-img">
                                                    <img src="img/fruite-item-2.jpg" class="img-fluid w-100 rounded-top" alt="">
                                                </div>
                                                <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
                                                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div class="d-flex justify-content-between flex-lg-wrap">
                                                        <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

*/
allCatwisePr += `<div id="tab-1" class="tab-pane fade show p-0 active">
<div class="row g-4">
    <div class="col-lg-12">
        <div class="row g-4">`
        allPr.map((j)=>{

            allCatwisePr += `<div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                            <img src=${j.image} class="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                <h4>${j.pname}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <div class="d-flex justify-content-between flex-lg-wrap">
                                    <p class="text-dark fs-5 fw-bold mb-0">$${j.price} / kg</p>
                                    <button onclick="addToCart(${j.pid})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>`


        })

            
            
allCatwisePr +=` </div>
</div>
</div>
</div>`
let k=2;
allCatData.map((i)=>{
    allCatwisePr += `<div id="tab-${k++}" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">`
            allPr.map((j)=>{
                    if(j.category == i.id){
                        allCatwisePr += `<div class="col-md-6 col-lg-4 col-xl-3">
                                            <div class="rounded position-relative fruite-item">
                                                <div class="fruite-img">
                                                <img src=${j.image} class="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                
                                                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>${j.pname}</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div class="d-flex justify-content-between flex-lg-wrap">
                                                        <p class="text-dark fs-5 fw-bold mb-0">$${j.price} / kg</p>
                                                        <button onclick="addToCart(${j.pid})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`

                    }
            })
                    
                                        
                                        
    allCatwisePr +=` </div>
                </div>
            </div>
        </div>`
})


document.getElementById('productData').innerHTML = allCatwisePr

let cartData = []
const addToCart=(id)=>{
    let getCartData = JSON.parse(localStorage.getItem('cartInfo'))
    let len = getCartData != null ? getCartData.length+1 : 1;
    let checkData = '';
    if(getCartData != null){
        checkData = getCartData.find((i)=>{
            return i.pid == id
        })
    }
    if(checkData != undefined){
        //qty ++
        let data = getCartData.map((i)=>{
            if(i.pid == id){
                i.qty += 1;
            }   
            return i;
        })
        cartData = data
    } else {
        //push
        let obj = {
            cartid:len,
            pid:id,
            qty:1
        }
        cartData.push(obj)
    }
    
    localStorage.setItem("cartInfo",JSON.stringify(cartData))
getCounter()
    
}
function getCounter(){
    let getCartData = JSON.parse(localStorage.getItem('cartInfo'))
    let finalLength = getCartData.length;
    console.log(finalLength);
    document.getElementById("cartCounter").innerHTML = finalLength
}
getCounter()