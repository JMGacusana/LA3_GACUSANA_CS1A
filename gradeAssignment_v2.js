// If Else If with Conditional Ternary Operators

let score = parseInt(prompt("Please Input Your Score: "));

 (score >= 97) ? console.log("1.00 Excellent") :
 (score >= 94) ? console.log("1.25 Excellent") :
 (score >= 91) ? console.log("1.50 Above Average") :
 (score >= 88) ? console.log("1.75 Above Average") :
 (score >= 85) ? console.log("2.00 Average") :
 (score >= 82) ? console.log("2.25 Average") :
 (score >= 79) ? console.log("2.50 Below Average") :
 (score >= 76) ? console.log("2.75 Below Average") :
 (score >= 75) ? console.log("3.00 Below Average") :
 (score >= 72) ? console.log("4.00 Poor") :
 console.log("5.00 Poor");

 // Final Remarks
 let remarks =
    (score >= 90) ? "HIGH PASS, Candidate for Cum Laude" :
    (score >= 80) ? "AVERAGE PASS" :
    (score >= 75) ? "LOW PASS" :
    "FAILED, Needs Improvement";

 // Output the results
 console.log(`Your equivalent Grade is "${score}"`);
 console.log(`Final Remarks: ${remarks}`);
 