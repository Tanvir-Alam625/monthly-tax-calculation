// ======================================
// monthly tax claculation 
// first 30days per day 10tk , second 30days per day 30tk , and third per day 50tk 
// =======================================
// variable declearation 
const days = 362;

// function 
function findtotalMonthTax(fewDays) {
    const firstMonthPerDay = 10;
    const secondMonthPerDay = 20;
    const thirdMonthPerDay = 50;
    const inputData = typeof fewDays;
    if(typeof fewDays !='number'){
        return `please input the valid number, Not Acceptable ${inputData} !`;
    }
    else if(fewDays < 1){
        return "please your input feild must be 1 greater than ";
    }

    else if(fewDays<=30){
        const firstMonthInDays = fewDays * firstMonthPerDay;
        if(fewDays == 30){
            return `1 Month: ${firstMonthInDays} TK`;
        }
        return `${fewDays} Days: ${firstMonthInDays} Tk`;
       
    }
    else if(fewDays <=60){
        const firstMonth = 30 * firstMonthPerDay;
        const secondMonth = fewDays - 30;
        const secondMonthInDays = secondMonth * secondMonthPerDay;
        const secondMonthTotal = firstMonth + secondMonthInDays;
        if(fewDays == 60){
            return `2 Month: ${secondMonthTotal} TK`;
        }
        else{
            
            return ` 1 Month ${secondMonth} Day: ${secondMonthTotal}TK `;
        }
    }
    else{
        const firstMonth = 30 * firstMonthPerDay;
        const secondMonth = 30 * secondMonthPerDay;
        const thirdMonth = fewDays - 60;
        const thirdaMonthInDays = thirdMonth * thirdMonthPerDay;
        const thirdMonthTotal = firstMonth + secondMonth + thirdaMonthInDays;
    //    start the switch statement
        switch(fewDays){
            case 90:
                return`3 Months: ${thirdMonthTotal} TK`;
                break;
            case 120:
                return`4 Months: ${thirdMonthTotal} TK`;
                break;
            case 150:
                return`5 Months: ${thirdMonthTotal} TK`;
                break;
            case 180:
                return`6 Months: ${thirdMonthTotal} TK`;
                break;
            case 210:
                return`7 Months: ${thirdMonthTotal} TK`;
                break;
            case 240:
                return`8 Months: ${thirdMonthTotal} TK`;
                break;
            case 270:
                return`9 Months: ${thirdMonthTotal} TK`;
                break;
            case 300:
                return`10 Months: ${thirdMonthTotal} TK`;
                break;
            case 300:
                return`11 Months: ${thirdMonthTotal} TK`;
                break;
            case 360:
                return`1 Year: ${thirdMonthTotal} TK`;
                break;
        }
        // end the switch statement 
        if(fewDays <90){
            return `2 Month ${thirdMonth} Days: ${thirdMonthTotal} TK`;

        }
        else if(fewDays <120){
            const threeMonth = fewDays -90;
            return `3 Months ${threeMonth} Days: ${thirdMonthTotal} TK`;
        }
        else if(fewDays <150){
            const fourMonth = fewDays - 120;
            return `4 Months ${fourMonth} Days: ${thirdMonthTotal} TK`;
        }
        else if(fewDays <180){
            const fiveMonth = fewDays - 150;
            return `5 Months ${fiveMonth} Days: ${thirdMonthTotal} TK`;
        }
        else if(fewDays <210){
            const sixMonth = fewDays - 180;
            return `6 Months ${sixMonth} Days: ${thirdMonthTotal} TK`;
        }
        else if(fewDays <240){
            const sevenMonth = fewDays - 210;
            return `7 Months ${sevenMonth} Days: ${thirdMonthTotal} TK`;
        }
        
        else if(fewDays <270){
            const eightMonth = fewDays - 240;
            return `8 Months ${eightMonth} Days: ${thirdMonthTotal} TK`;
        }
        else if(fewDays <300){
            const nineMonth = fewDays - 270;
            return `9 Months ${nineMonth} Days: ${thirdMonthTotal} TK`;
        }
        else if(fewDays <330){
            const tenMonth = fewDays - 300;
            return `10 Months ${tenMonth} Days: ${thirdMonthTotal} TK`;
        }
        else if(fewDays <360){
            const elevenMonth = fewDays - 330;
            return `11 Months ${elevenMonth} Days: ${thirdMonthTotal} TK`;
        }else{
            const oneYear = fewDays - 360;
            return ` One Year ${oneYear} Days: ${thirdMonthTotal} TK`;
        }
    }   
}
// calling function 
const output = findtotalMonthTax(days);
console.log(output);
