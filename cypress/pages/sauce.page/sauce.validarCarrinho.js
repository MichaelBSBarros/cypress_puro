import Base from '../_base.page'
import {Carrinho as cart} from '../components/sauce_elements/carrinho.elements'

export class Sauce_validar_carrinho extends Base {

    static validar_carrinho_sauce_demo(){
        
        cy.get('@produto').then( produto => {
            
            cy.wrap({produto}).as('produto')
            
            cy.get('@produto').then( obj => {
                obj.produto.prod
            })

            const prod = produto.prod

            cy.get(cart.BTN_CARRINHO).click()
            cy.get('#item_4_title_link > div').should('contain.text', prod) 

        })

    }

}