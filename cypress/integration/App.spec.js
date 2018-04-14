import { elementAt } from "rxjs/operator/elementAt";

function getElement(selector) {
    return cy.get(`[data-testId=${selector}]`)
}

describe("Home Page", () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3000/`)
    })

    it("should display a quote", () => {
        const quote = getElement("quote")
        quote.should(el => expect(el[0].textContent).to.not.equal(""))
    })
    it("should display a header", () => {
        const header = getElement("header")
        header.should(el => expect(el[0].textContent).to.not.equal(""))        
    })
    it("should display a button to get the next quote", () => {
        const nextQuoteButton = getElement("next-quote")
    })
    it("should display a button to share the quote on twitter", () => {
        const twitterSharButton = getElement("share-twitter")
    })
    it("should change the quote", () => {
        let textBefore
        let textAfter

        getElement("quote").should(el => {
            expect(el[0].textContent).to.not.equal("")
            textBefore = el[0].textContent
        })

        getElement("next-quote").click()
        cy.wait(1000)

        getElement("quote").should(el => {
            expect(el[0].textContent).to.not.equal("")            
            textAfter = el[0].textContent
            
            expect(textBefore).to.not.equal(textAfter)
        })
    })
    it("should take the user to twitter to share the quote", () => {
        cy.window().then(win => {
            cy.spy(win, "open")

            getElement("share-twitter").click()
            
            cy.window().its("open").should("be.called")
        })
    })
})
