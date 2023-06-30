///<reference types="cypress-iframe" />
describe("Midtrans Payment", () => {
    beforeEach(() => {
        cy.visit("https://demo.midtrans.com/");
    })
    it("Completes the booking and Virtual Account payment successfully", () => {
        cy.contains("BUY NOW").click();

        cy.contains("CHECKOUT").click()

        cy.frameLoaded("#snap-midtrans").its("0.contentDocument.body").should("not.be.empty").then(cy.wrap);

        cy.iframe("#snap-midtrans").contains("Virtual account").click();

        cy.iframe("#snap-midtrans").contains("BCA").click();
        cy.iframe("#snap-midtrans").should('contain', "Virtual account number");

        cy.iframe("#snap-midtrans").contains("Back to merchant").click();
    });

    it("Completes the booking and GoPay payment successfully", () => {
        cy.contains("BUY NOW").click();

        cy.contains("CHECKOUT").click()

        cy.frameLoaded("#snap-midtrans").its("0.contentDocument.body").should("not.be.empty").then(cy.wrap);

        cy.iframe("#snap-midtrans").contains("GoPay").click();

        cy.iframe("#snap-midtrans").contains("Back to merchant").click();
    });

    it("Completes the booking and Indomaret payment successfully", () => {
        cy.contains("BUY NOW").click();

        cy.contains("CHECKOUT").click()

        cy.frameLoaded("#snap-midtrans").its("0.contentDocument.body").should("not.be.empty").then(cy.wrap);

        cy.iframe("#snap-midtrans").contains("Indomaret").click();

        cy.iframe("#snap-midtrans").should('contain', "Payment code");

        cy.iframe("#snap-midtrans").contains("Close this page").click();
    });
});

