
        document.getElementById("loanForm").addEventListener("submit", function (e) {
            e.preventDefault();

                
                const loanPurpose = document.getElementById("loanPurpose").value;
                const loanType = document.getElementById("loanType").value;
                const lender = document.getElementById("lender").value;
                const income = parseFloat(document.getElementById("income").value);
                const farmingExperience = parseInt(document.getElementById("farmingExperience").value);
                const creditScore = document.getElementById("creditScore").value;
                const loanAmount = parseFloat(document.getElementById("loanAmount").value);
                const loanTerm = parseInt(document.getElementById("loanTerm").value);
                const age = parseInt(document.getElementById("age").value);
                const gender = document.getElementById("Gender").value;

            let approvalMessage = "";

           
            if (loanPurpose === "seedsAndFertilizers" && loanType === "cropLoan" && lender === "publicSectorBank") {
                approvalMessage += "<br>Loan purpose, type, and lender are suitable. ";
            } else {
                approvalMessage += "<br><span class='rejection-message'>Loan purpose, type, or lender is not suitable. </span> ";
            }

           

            if (income >= 500000) {
                approvalMessage += "<br>Income is sufficient. ";
            } else {
                approvalMessage += "<br><span class='rejection-message'>Income is not sufficient.</span> ";
            }

           

            
            if (farmingExperience >= 5) {
                approvalMessage += "<br>Farming experience is adequate. ";
            } else {
                approvalMessage += "<br><span class='rejection-message'>Farming experience is not adequate.</span>";
            }

           
            

            if (creditScore === "Excellent: 800-850") {
                approvalMessage += "<br>Credit score is excellent. ";
            } else if (creditScore === "<br>Very Good: 740-799") {
                approvalMessage += "<br>Credit score is very good. ";
            } else if (creditScore === "Good: 670-739") {
                approvalMessage += "<br>Credit score is good. ";
            } else {
                approvalMessage += "<br><span class='rejection-message'>Credit score is not sufficient.</span> ";
            }

            


            if (loanAmount <= 500000) {
                approvalMessage += "<br>Loan amount is suitable. ";
            } else {
                approvalMessage += "<br><span class='rejection-message'>Loan amount is not suitable. </span> ";
            }

           
            

            if (loanTerm <= 36) {
                approvalMessage += "<br>Loan term is suitable. ";
            } else {
                approvalMessage += "<br><span class='rejection-message'>Loan term is not suitable. </span> ";
            }

          
            

            if (age >= 18) {
                approvalMessage += "<br>Age is suitable. ";
            } else {
                approvalMessage += "<br><span class='rejection-message'>Age is not suitable.</span> ";
            }

           
            

            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = approvalMessage;
            resultDiv.className = "approval-message"; 
            

        });