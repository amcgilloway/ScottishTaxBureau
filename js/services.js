
var modalHeading = document.querySelector('.modal-title');
var modalContent = document.querySelector('.modal-body');
function changeIt(_src) {
    var url = _src.substring(_src.lastIndexOf('/') + 1);

    switch (url) {
        case 'bookeeping':
            modalHeading.textContent = "Bookkeeping";
            modalContent.innerHTML = "<p>Keeping business records is very important as these are the basis on which we prepare the finalised accounts. In the event of an enquiry, HMRC may request to see your paperwork to supportthe submitted accounts. <br /> <br /> We offer to process and file your paperwork in a timely and organised manner, so your records are  kept up to date and easy to access. This also helps us in getting to know and understand your business better, and be able to provide the best service tailored to your needs. <br /> <br /> Regular bookkeeping also means that your annual accounts can be finalised soon after the year end. <br /></p>";
            break;
        case 'Self-Assessment.jpg':
            title = "Self Assessment";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/selfAssess.txt");
            img = document.getElementById('selfAssess')
            break;
        case 'Partnerships.jpg':
            title = "Partnerships";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/partnerships.txt");
            img = document.getElementById('partnerships')
            break;
        case 'VAT.jpg':
            title = "VAT";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/vat.txt");
            img = document.getElementById('vat')
            break;
        case 'Construction.jpg':
            title = "Construction";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/construction.txt");
            img = document.getElementById('construction')
            break;
        case 'Company-Formation.jpg':
            title = "Company Formation";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/compForm.txt");
            img = document.getElementById('companyFormation')
            break;
        case 'Business-Accounting.jpg':
            title = "Business Accounting";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/businessAccounts.txt");
            img = document.getElementById('businessAccounts')
            break;
        case 'Corporation-Tax.jpg':
            title = "Corporation Tax";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/corpTax.txt");
            img = document.getElementById('corpTax')
            break;
        case 'Inheritance.jpg':
            title = "Inheritance Tax";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/inheritance.txt");
            img = document.getElementById('inheritance')
            break;
        case 'Machine-Games-Duty.jpg':
            title = "MGD";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/mgd.txt");
            img = document.getElementById('mgd')
            break;
        case 'Pay-As-You-Earn.jpg':
            title = "PAYE";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/paye.txt");
            img = document.getElementById('paye')
            break;
        case 'Payroll.jpg':
            title = "Payroll";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/payroll.txt");
            img = document.getElementById('payroll')
            break;
        case 'Pensions.jpg':
            title = "Automatic Enrolment";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/pensions.txt");
            img = document.getElementById('pensions')
            break;
        case 'Self-Employed.jpg':
            title = "Self Employed";
            $(".modal-header #myModalLabel").text(title);
            $('#text').load("servicesText/selfEmp.txt");
            img = document.getElementById('selfEmp')
            break;
    }
}
