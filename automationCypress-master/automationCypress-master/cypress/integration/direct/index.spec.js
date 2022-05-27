 <reference types="Cypress" />
require("../../plugins/index");
require("cypress-xpath");
describe("Directing", function () {
    it("Check the successful display of the zalo application screen", function () {
        cy.visit("https://id.zalo.me/account?continue=https://chat.zalo.me");
        cy.wait(2000)
    });

    it("Check the successful login zalo account", function () {
        cy.visit("https://id.zalo.me/account?continue=https://chat.zalo.me");
        cy.wait(2000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[1]/ul/li[2]/a').click()
        cy.xpath('//*[@id="input-phone"]').type('0869081906')
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div[1]/div/div/div[2]/input').type('hh123456')
        cy.wait(2000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/div/div/div/div[4]/a').click()
        cy.xpath('//*[@id="app"]/div/div/div/div[2]/table/tbody/tr[1]/td[1]/div').click()
        cy.xpath('//*[@id="app"]/div/div/div/div[2]/table/tbody/tr[2]/td[3]/div').click()
        cy.xpath('//*[@id="app"]/div/div/div/div[4]/div[2]/div').click()
    });

    
})