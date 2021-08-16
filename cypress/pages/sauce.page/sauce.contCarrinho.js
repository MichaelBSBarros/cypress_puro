import Base from '../_base.page'
import {Carrinho as cart} from '../components/sauce_elements/carrinho.elements'

export class Sauce_cont_carrinho extends Base {

    static cont_carrinho_sauce_demo(){
        cy.get(cart.QDT_PROD_CART).should('exist');
    }

}