/// <reference types="cypress"/>

describe('Tentar logar sem preencher os dados de usuario no Sauce Demo', () => {
  context('Dado que esteja na página de login', () => {
    beforeEach(() => {
      //cy.visit('https://www.dimepkairos.com.br/dimep/account/logon?utm_campaign=boas_vindas_e-mail_para_colaboradores_-_beneficios&utm_medium=email&utm_source=RD+Station')
      cy.visit('www.google.com')
    })
    context('Quando tentar logar sem preencher os dados de usuario', () => {
      beforeEach(() => {

        var data = new Date()

        var minute = data.getMinutes()
        if (minute < 10){
          minute = `0${minute}`
        }

        var hora1 = data.getHours()
        var hora1 = hora1 - 9
        if (hora1 < 10){
          hora1 = `0${hora1}`
        }

        var hora2 = data.getHours()
        var hora2 = hora2 - 6
        if (hora2 < 10){
          hora2 = `0${hora2}`
        }

        var hora3 = data.getHours()
        var hora3 = hora3 - 5
        if (hora3 < 10){
          hora3 = `0${hora3}`
        }

        var hora4 = data.getHours()
        if (hora4 < 10){
          hora4 = `0${hora4}`
        }

        var hora1 = `${hora1}${minute}`
        var hora2 = `${hora2}${minute}`
        var hora3 = `${hora3}${minute}`
        var hora4 = `${hora4}${minute}`

        cy.get('.gLFyf').type(hora1)
        cy.get('.gLFyf').type(hora2)
        cy.get('.gLFyf').type(hora3)
        cy.get('.gLFyf').type(hora4)

        //cy.get('#LogOnModel_UserName').type('michael.barros@compasso.com.br')
        //cy.get('#LogOnModel_Password').type('KL4737')
        //cy.get('#btnFormLogin').click()
        //cy.get('#toogleUserName').click()
        //cy.get('#UserMenu > div:nth-child(1)').click()
        //cy.get('#UserProfilePedidosJustificativas > .ProfileLateralMenuLabel').click()
        //cy.get('#ApontID6 > div.LastSlot').type('1210')
        //cy.get('.ui-datepicker-close').click()
        //cy.get('#ApontID6 > div.LastSlot').type('1310')
        //cy.get('.ui-datepicker-close').click()
        ////cy.get('#dp1629233469254')
      })
      it('Então deverá ser exibda a mensagem "Username is required"', () => {
        //Sauce_login.validar_login_sd('empty')
      })
    })
  })
})