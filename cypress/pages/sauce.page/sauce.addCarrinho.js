import Base from '../_base.page'
import {Carrinho as cart} from '../components/sauce_elements/carrinho.elements'
import {Produto as prod} from '../components/sauce_elements/produtos.elements'

export class Sauce_add_carrinho extends Base {
    static adicionar_carrinho_sauce_demo(produto){

        cy.get(cart.QDT_PROD_CART).should('not.exist');

        cy.get(prod.BTN_SELEC_PROD).should('contain.text', produto).click()
        super.clickOnElement(prod.BTN_ADD_CART)
        cy.get(cart.BTN_REMOV_CART).should('exist')

        cy.wrap({'prod': produto}).as('produto')        
    }
}