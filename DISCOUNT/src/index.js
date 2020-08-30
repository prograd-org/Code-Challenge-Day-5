// Mr.Phileas Fogg is a very perfect man. He saves money even on petite things. One day he heard a discount offer announced in a mall. 
// He wants to purchase lot of items to save his money. The discount is given only when atleast two items are bought. 
// Since each item has different discount prices , he finds difficult to check the amount he has saved.  
// So he approaches you to device a automated discount calculator to make him easy while billing.


//Write a function to return the Discount Amount
function find_DiscountAmount(item1, item2, disc_precent) {
    var total = (item1 + item2)
    var item1disc = (item1 / 100) * disc_precent
    var item2disc = (item2 / 100) * disc_precent
    return total - (item1disc + item2disc)
}

//Write a function to return the discount percent
function find_Discount(item1, item2, disc_precent) {
    return ((disc_precent / 100) * (item1 + item2));
}