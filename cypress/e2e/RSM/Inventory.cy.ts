
describe ('Login Test', function () {
    // Test Case
    it('Login Page', function(){
         // test step for URL launching
      
         cy.visit("https://retailsappqa.azurewebsites.net");      
      
    })
    // Test Case- Login
    it ('Login', function(){
         // test step for URL launching
         cy.viewport('macbook-15')
         cy.visit("https://retailsappqa.azurewebsites.net");
         cy.get(':nth-child(2) > .form-control')
           .type('rohith')
         cy.get(':nth-child(3) > .form-control')
         .type('anos@123')
         cy.get('#kt_login_signin_form > :nth-child(4)')
         .type('{enter}')


        cy.contains('Master').click()
        cy.contains('Products').click()
        cy.wait(10)
        //  Navigate on to Inventory
        cy.contains('Inventory').click()
        cy.contains('Stock Summary').click()
        cy.wait(60)
        cy.contains('History').click()
        // navigates to generate MRP
        // cy.contains('MRP').click()
        cy.get(':nth-child(2) > .chosen-select > .ng-select-container > .ng-value-container > .ng-input').click()
        cy.get(':nth-child(2) > .chosen-select > .ng-select-container > .ng-arrow-wrapper').type('Gold')
        cy.get(':nth-child(3) > .chosen-select > .ng-select-container').click()
        cy.get(':nth-child(3) > .chosen-select > .ng-select-container > .ng-arrow-wrapper').click()
        cy.get('Search').click()
        cy.get('.ng-clear-wrapper').click()
        cy.get('#a1f3ca28d990-1').click()
        cy.contains('#a64e472a8379-1').click()
        cy.get(':nth-child(4) > .chosen-select > .ng-select-container')
        cy.get(':nth-child(4) > .chosen-select > .ng-select-container > .ng-arrow-wrapper')
        cy.get(':nth-child(4) > .chosen-select > .ng-select-container > .ng-value-container > .ng-input > input')

        // cy.get('.btn-group > :nth-child(2)').select(2)
        // cy.get(':nth-child(1) > .cdk-column-actions > .row > .print-icon > .material-symbols-rounded').click()
        // cy.go('back')
        // cy.contains('Master')
    
    })
   
    



    // it('manage-Master' , function() {
    
    //     cy.visit("https://retailsappqa.azurewebsites.net/dashboard");
    //     cy.get('#\#kt_header_menu > :nth-child(2) > .menu-link')
    //     cy.get('#\#kt_header_menu > :nth-child(2) > .menu-link > .menu-title')
    //     .type('Click')
    // });
    
    
})