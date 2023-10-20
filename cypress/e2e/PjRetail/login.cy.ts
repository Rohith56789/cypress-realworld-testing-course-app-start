describe ('Login Test', function () {
    // Test Case
    it ('Login Page', function(){
         // test step for URL launching
      
        //  cy.visit("https://pjretail.azurewebsites.net/Order/Inventory");      
         cy.visit("https://pjretail.azurewebsites.net");      
      
    })
    it.only('Login', function(){
        // test step for URL launching
        
        cy.viewport('macbook-13')
        cy.visit("https://pjretail.azurewebsites.net");
        cy.get('#UserName')
        .type('dinesh')
        cy.get('#Password')
        .type('1135')
        cy.get('#kt_login_signin_submit')
        .type('{enter}')

        cy.contains('Sales Billing').should('exist')
        // .click()
        cy.contains('Mains').should('exist')
        cy.contains('Purchases').should('exist')
        cy.contains('Customer').should('exist')
        cy.contains('Bar code').should('exist')
        cy.contains('Estimation').should('exist')
        cy.contains('Approvals').should('exist')
        cy.contains('Billing').should('exist')
        cy.contains('Repair').should('exist')
        cy.contains('Schemes').should('exist')
        cy.contains('Orders').should('exist')
        cy.contains('Reports').should('exist')
        cy.contains('Profile').should('exist')
        cy.contains('Dashboard').should('exist')
        cy.contains('Sales Billing').should('exist')
        cy.contains('Sales Estimation').should('exist')
        // cy.contains('Order Payment History').should('exist')
        // cy.contains('Dealer Order Management').should('exist')
        // cy.contains('Customer Order Management').should('exist')
        // cy.contains('Order Refund History').should('exist')
        // cy.contains('Barcode Delete History').should('exist')
        // cy.contains('Order Summary').should('exist')
        
    })

    it.only('the Tabs', function(){
       
        cy.viewport('macbook-13')
        cy.visit("https://pjretail.azurewebsites.net");
        cy.get('#UserName')
        .type('dinesh')
        cy.get('#Password')
        .type('1135')
        cy.get('#kt_login_signin_submit')
        .type('{enter}')

        cy.contains('Mains').should('exist')
        cy.get('Sales Billing').click()

           
           })

//     it ('navigate', function(){
//         cy.visit("https://pjretail.azurewebsites.net/Admin/Dashboard");
//         cy.get(':nth-child(11) > [href="#"]')
//         cy.url().should('contains', '/others')
   
//    })

// it ('Inventory', function(){
// cy.get('https://pjretail.azurewebsites.net/Sale/SalesBilling').click(); 
// cy.url().should('include', '/Sale/SalesBilling');

// })

})

// Open the first tab

// cy.visit('https://pjretail.azurewebsites.net/Admin/Dashboard', { log: false, onBeforeLoad: (win) => {
//   win.open('', '_blank'); // Open a new tab
// }});

// // Switch to the new tab
// cy.window().then((newWin) => {
//   newWin.location.href = 'https://pjretail.azurewebsites.net/Admin/Dashboard';
// });

// // Perform actions in the new tab
// cy.get('new-tab-element-selector').click();

// // Switch back to the original tab
// cy.visit('https://pjretail.azurewebsites.net');


