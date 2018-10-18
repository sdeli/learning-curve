(function(){

	var cartSystem={

		sessionStorage:{"ls":" "},

		shoppingCart:[],

		putInCart:{
			addClickEventListener: function(){
				$(".total-container").hide();
				if(sessionStorage.length>0){
					cartSystem.shoppingCart=JSON.parse(sessionStorage["ls"]);
					cartSystem.fillUpPageWithdataWhenDOMLoads();
				};

				var clickedItem="";
				var existInCart=false;

				$.each($(".card-block a"), function(index, value){
					this.addEventListener("click", function(e){
					clickedItem=e.target.dataset;
					checkCart();
					});
				});

				function checkCart(){
				 existInCart=false;
					$.each(cartSystem.shoppingCart, function(index, value){

						if(value.id===clickedItem.id){
							value.qty=parseInt(value.qty)+1;
							existInCart=true;
						}


					});

					if(!existInCart){
						cartSystem.shoppingCart.push(clickedItem);
						
					};


					sessionStorage["ls"]=JSON.stringify(cartSystem.shoppingCart);
					cartSystem.shoppingCart=JSON.parse(sessionStorage["ls"]);

					cartSystem.writeOutCartContent.navBarCartConent();
					cartSystem.writeOutCartContent.modalCartConent();
				};
				
			}
			
		},

		createCartContent:function(){

				var subTotal=0,
					total=0,
					totalQty=0,
					showQtyTotalInHeader=0,
					showTableInModal="";

				$.each(cartSystem.shoppingCart, function(index, value){
					qty=value.qty;
					totalQty=parseInt(totalQty)+parseInt(value.qty);
					subTotal=parseInt(value.qty)*parseInt(value.price);
					total=total+subTotal;					
					
					showQtyTotalInHeader="<p>Total: "+totalQty+"(Items): "+total+"</p>";
					showTableInModal=showTableInModal+"<tr><td>"+value.product+"</td><td>"+value.qty+"</td><td>"
									+value.price+"</td><td>"+subTotal+"</td></tr>";
						
				});

				total="<tr><td>"+" " +"</td><td>"+" "+"</td><td>"+"Full Costs: "+"</td><td>"+total+"</td></tr>";
				return {modal:showTableInModal, header:showQtyTotalInHeader, totalToModal:total};
		},

		writeOutCartContent: {

			navBarCartConent: function(){
		
				$("#showItemTotalInNav p").html(cartSystem.createCartContent().header);
				
				showTheHeaderCartWhenContainItem();


				function showTheHeaderCartWhenContainItem(){
					if(document.querySelectorAll("#showItemTotalInNav p")[0].innerHTML===""){
						console.log("amia");
						}
						else{$(".total-container").show(1000);
					};
				}
			},

			modalCartConent: function(){
				
				$(".cart-table tbody").html(cartSystem.createCartContent().modal);
				$(".cart-table tfoot").html(cartSystem.createCartContent().totalToModal);

			}

		},

		fillUpPageWithdataWhenDOMLoads: function(){

					cartSystem.writeOutCartContent.navBarCartConent();
					cartSystem.writeOutCartContent.modalCartConent();
			
		},
		nev : "peti",
		kor: 30,
		


		
		
	}


	$(document).ready(cartSystem.putInCart.addClickEventListener);

}());

/*



console.log()
feladat:
showItemTotalInNav
Irjuk ki fontre csinaljunk modalt

fontre: qty total

modal product qty price subtotal (total)

function: var 1 : each shopbol qty (price*qty)  

var 2: 
https://jsfiddle.net/umue9wbL/

create card*/