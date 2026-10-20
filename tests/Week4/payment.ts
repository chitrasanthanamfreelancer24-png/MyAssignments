//type alias trial

import test from "@playwright/test";

type paymentmethod = "UPI" | "CreditCard" | "PayPal"


function makePayment(paymentname: paymentmethod){


    console.log(paymentname);
    
}
makePayment("Gpay");