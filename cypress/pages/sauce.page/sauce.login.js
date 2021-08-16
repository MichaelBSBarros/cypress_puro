import Base from '../_base.page'
import {Login as log} from '../components/sauce_elements/login.elements'

export class Sauce_login extends Base {
    
    static acessar_sauce_demo(){
        cy.visit('/')
    }

    static logar_sauce_demo(usuario, password){

        if (usuario != ' ') {
            //super.typeValue(log.INP_USER, "standard_user")
            cy.get(log.IMP_USER).type(usuario)
            cy.get(log.IMP_PASS).type(password)             
        };

        super.clickOnElement(log.BTN_LOGIN)
        
        switch (usuario) {

            case 'standard_user': 
                var tipoUser = true;
                break;

            case 'locked_out_user':
                var tipoUser = false;
                var msg = "Sorry, this user has been locked out.";
                break;

            case 'problem_user':
                var tipoUser = true;
                break;

            case ' ':
                var tipoUser = false;
                var msg = "Username is required";
                break;            
        };

        if (tipoUser == true){
            cy.get(log.BTN_OPTIONS).click()
            cy.get(log.BTN_LOGOUT).should('exist')
            cy.wait(1000)
            cy.get(log.BTN_CLOSE_OPTIONS).click()

        }else{
            cy.get(log.WRN_LOGIN_FAIL).should('contain.text', msg)
            cy.wait(1000)

        };

    }
}