// defining a function for tipCalculation

function siCalculate()
{
    // local variables
    let pamt, rint, tym, sint, sita;

    // data collection
    pamt = +pa.value;    // principal amount
    rint = +ri.value;     // rate of interest
    tym = +tp.value;    // time in years

    //calc's
    sint = Math.round(pamt * rint/100 * tym);           // simple interest   
    sita = Math.round(pamt + sint);                      // total amount for simple interest

    // displaying op's
    si.innerHTML = "Simple Interest : &#8377;" + sint;
    tasi.innerHTML = "Total Amount for SI : &#8377;" + sita;
}
function ciCalculate()
{
    // local variables
    let pamt, rint, tym, cita;

    // data collection
    pamt = +pa.value;    // principal amount
    rint = +ri.value;     // rate of interest
    tym = +tp.value;    // time in years

    //calc's
    cita = Math.round(pamt * (1+(rint/100)) **tym);    // total amount for compound interest
    cint = Math.round(cita - pamt);                     // compound interest

    // displaying op's
    ci.innerHTML = "Compound Interest : &#8377;" + cint;
    taci.innerHTML = "Total Amount for CI : &#8377;" + cita;
}

// defining a function for clearing all inputs

function clearFields()
{
    pa.value = " ";
    ri.value = " ";
    tp.value = " ";
    si.innerHTML = "Simple Interest : " ;
    tasi.innerHTML = "Total Amount for SI : " ;
    ci.innerHTML = "Compound Interest : " ;
    taci.innerHTML = "Total Amount for CI : " ;
    pa.focus();
}