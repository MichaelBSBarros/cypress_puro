const Login = {

    IMP_USER            : '[data-test=username]',
    IMP_PASS            : '[data-test=password]',
    BTN_LOGIN           : '[data-test=login-button]',
    BTN_OPTIONS         : '#react-burger-menu-btn',
    BTN_CLOSE_OPTIONS   : '#react-burger-cross-btn',
    BTN_LOGOUT          : '#logout_sidebar_link',
    WRN_LOGIN_FAIL      : '[data-test="error"]'
}

Cypress.Commands.add('acessarPaginaSauceDemo', () => {
    cy.visit('/')
})

Cypress.Commands.add('inserirDadosLogin', (item) => {
    switch(item.tipo){
        case 'valido':
        case 'invalido':
        case 'bloqueado':
            cy.get(Login.IMP_USER).type(item.username)
            cy.get(Login.IMP_PASS).type(item.password)
            break;
        case 'sem preencher usuario':
            cy.get(Login.IMP_PASS).type(item.password)
            break;
        case 'sem preencher senha':
            cy.get(Login.IMP_USER).type(item.username)
            break                
    }
    cy.get(Login.BTN_LOGIN).click()
})

Cypress.Commands.add('validarRetornoLogin', (item) => {
    if (item.tipo != 'valido'){
        cy.get(Login.WRN_LOGIN_FAIL).should('contain.text', item.message)
    }else{
        cy.get(Login.BTN_OPTIONS).click()
        cy.get(Login.BTN_LOGOUT).should('exist')
    }
})


