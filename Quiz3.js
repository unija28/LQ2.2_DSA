//Price Inquiry: Using SWITH (Conditional Statement), alert(), and promp()

console.log(`The items in the grocery\ n
    A. Pepsi Cola Php 30
    B. Coca Cola Php  35
    C. Apple (per kg)  Php 100
    D. Orange (per kg)  Php  120
    E. Hotdog (per kg) Php 180`);

    let items_choice = prompt("Select by letter of the item:");
    let qty = parseInt(prompt("How many:"));
    let tot_price = 0;

    switch(items_choice){
        case "a":
            tot_price = qty * 30;
            alert(The total price of the order ${items_choice} x ${qty}:${tot_price});
            break;
        
        case "b":
            tot_price = qty * 35;
            alert(The total price of the order ${items_choice} x ${qty}:${tot_price});
            break;

        case "c":
            tot_price = qty * 100;
            alert(The total price of the order ${items_choice} x ${qty}:${tot_price});
            break;

        case "d":
            tot_price = qty * 120;
            alert(The total price of the order ${items_choice} x ${qty}:${tot_price});
            break;

        case "e":
            tot_price = qty * 180;
            alert(The total price of the order ${items_choice} x ${qty}:${tot_price});
            break;
        default:
            alert("The choice is not in the Grocery list");
            break;
    }
Write to Lunesa Camitog Cabel
