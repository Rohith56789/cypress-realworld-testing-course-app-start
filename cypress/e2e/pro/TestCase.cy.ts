describe ('Visit', function () {
    // Test Case - Title
    it ('Visit', function(){
         // test step for URL launching
         cy.visit("http://127.0.0.1:5501/index.html");
         cy.title().should('Calaculating Gold Price')      
      
    })
    // ! title
    it ('!title ', function(){
         // test step for URL launching
         cy.visit("http://127.0.0.1:5501/index.html");
         cy.title().should('Calaculating = Gold Price')      
      
    })
    // Test Case
    // it ('Cart-list', function(){
    //      // test step for URL launching
      
    //      cy.visit("http://127.0.0.1:5501/index.html"); 
    //      cy.get('#cartlist')
    //      cy.scrollTo('24')     
    //      cy.get('#pricein')
    //      cy.type('10')
    //      cy.get('#result')
        
    // })

     // Test Case
//      it ('Necklace', function(){
//         // test step for URL launching
     
//         cy.visit("http://127.0.0.1:5501/index.html#"); 
          
//    })

});