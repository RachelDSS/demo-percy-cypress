describe('Percy Demo', () => {

    it('Test Percy - La taverne du Testeur', () => {
        // accès au site de la taverne du testeur
        cy.visit('https://latavernedutesteur.fr/')
        // snapshot de la home page
        cy.percySnapshot('Taverne - Home');

        // accès au premier article qui parle de cypress
        cy.get("input.elementor-search-form__input").type("cypress");
        cy.get("button.elementor-search-form__submit").click();
        cy.get("h3.elementor-post__title").first().click();

        // snapshot de l'article 
        cy.percySnapshot('Taverne - Article Cypress');
    });

});